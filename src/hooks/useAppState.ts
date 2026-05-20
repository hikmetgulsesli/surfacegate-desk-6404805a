import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type {
  AgentRecord,
  AppActions,
  AppState,
  SurfaceCounts,
  SurfacePreferences,
  SurfaceRoute,
  TicketRecord,
} from '../types/domain';
import { clearPersistedState, loadPersistedState, persistState } from '../utils/storage';

const initialTickets: TicketRecord[] = [
  {
    id: 'sg-1042',
    title: 'Gate kiosk payment terminal offline',
    queue: 'Hardware Escalations',
    priority: 'critical',
    status: 'open',
    ownerId: 'sl',
    slaMinutesRemaining: 18,
  },
  {
    id: 'sg-1038',
    title: 'Passenger assistance desk needs queue reroute',
    queue: 'L1 Triage',
    priority: 'high',
    status: 'in-progress',
    ownerId: 'mr',
    slaMinutesRemaining: 42,
  },
  {
    id: 'sg-1027',
    title: 'Badge reader intermittent failure',
    queue: 'Facilities',
    priority: 'medium',
    status: 'open',
    ownerId: 'ej',
    slaMinutesRemaining: 96,
  },
];

const initialAgents: AgentRecord[] = [
  { id: 'ej', name: 'Elena Jenkins', tier: 'L2 Specialist', status: 'over-capacity', activeLoad: 9 },
  { id: 'mr', name: 'Marcus Reed', tier: 'L1 Triage', status: 'at-capacity', activeLoad: 7 },
  { id: 'sl', name: 'Sarah Lin', tier: 'L2 Specialist', status: 'available', activeLoad: 4 },
];

const defaultPreferences: SurfacePreferences = {
  density: 'comfortable',
  notifications: true,
};

type Action =
  | { type: 'navigate'; route: SurfaceRoute }
  | { type: 'select'; recordId: string | null }
  | { type: 'ticket:create' }
  | { type: 'ticket:save' }
  | { type: 'ticket:discard' }
  | { type: 'ticket:resolve' }
  | { type: 'ticket:note' }
  | { type: 'load:retry' }
  | { type: 'load:recover' }
  | { type: 'filters:clear' }
  | { type: 'status:update' }
  | { type: 'ticket:take' }
  | { type: 'agent:away'; agentId: string }
  | { type: 'workload:bulk-reassign'; fromAgentId: string; toAgentId: string }
  | { type: 'preferences:save' }
  | { type: 'preferences:reset' }
  | { type: 'insights:export' }
  | { type: 'insights:report' }
  | { type: 'action:record'; label: string };

function getCounts(tickets: TicketRecord[], agents: AgentRecord[]): SurfaceCounts {
  return {
    tickets: tickets.length,
    openTickets: tickets.filter((ticket) => ticket.status !== 'resolved').length,
    queues: new Set(tickets.map((ticket) => ticket.queue)).size,
    availableAgents: agents.filter((agent) => agent.status === 'available').length,
    urgentTickets: tickets.filter((ticket) => ticket.priority === 'critical' || ticket.slaMinutesRemaining <= 30).length,
  };
}

function getNextTicketNumber(tickets: TicketRecord[]): number {
  return (
    tickets.reduce((highest, ticket) => {
      const match = /^sg-(\d+)$/.exec(ticket.id);
      return match ? Math.max(highest, Number(match[1])) : highest;
    }, 1042) + 1
  );
}

function buildInitialState(): AppState {
  const persisted = loadPersistedState();
  const activeScreen = persisted.data.activeScreen ?? 'operations';
  const selectedRecord = persisted.data.selectedRecord ?? initialTickets[0]?.id ?? null;
  const tickets = initialTickets;
  const agents = initialAgents;

  return {
    activeScreen,
    selectedRecord,
    activePanel: persisted.data.activePanel ?? 'ticket-operations',
    counts: getCounts(tickets, agents),
    storageStatus: persisted.error ? 'recovered' : persisted.data.activeScreen ? 'restored' : 'idle',
    lastError: persisted.error,
    nextTicketNumber: getNextTicketNumber(tickets),
    tickets,
    agents,
    preferences: {
      ...defaultPreferences,
      ...persisted.data.preferences,
    },
    actionLog: ['SurfaceGate Desk initialized'],
  };
}

function log(state: AppState, message: string): AppState {
  return {
    ...state,
    actionLog: [message, ...state.actionLog].slice(0, 8),
  };
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'navigate':
      return log(
        {
          ...state,
          activeScreen: action.route,
          activePanel: action.route === 'support' ? 'recovery' : action.route,
          lastError: null,
        },
        `Navigated to ${action.route}`,
      );
    case 'select':
      return log(
        {
          ...state,
          selectedRecord: action.recordId,
        },
        action.recordId ? `Selected ${action.recordId}` : 'Selection cleared',
      );
    case 'ticket:create': {
      const id = `sg-${state.nextTicketNumber}`;
      const ticket: TicketRecord = {
        id,
        title: 'New service desk ticket',
        queue: 'L1 Triage',
        priority: 'medium',
        status: 'open',
        slaMinutesRemaining: 120,
      };
      const tickets = [ticket, ...state.tickets];
      return log(
        {
          ...state,
          activeScreen: 'editor',
          activePanel: 'ticket-editor',
          selectedRecord: id,
          nextTicketNumber: state.nextTicketNumber + 1,
          tickets,
          counts: getCounts(tickets, state.agents),
          storageStatus: 'saved',
          lastError: null,
        },
        `Created ${id}`,
      );
    }
    case 'ticket:save':
      return log({ ...state, storageStatus: 'saved', lastError: null }, 'Ticket changes saved');
    case 'ticket:discard':
      return log({ ...state, activeScreen: 'operations', activePanel: 'ticket-operations' }, 'Draft discarded');
    case 'ticket:resolve': {
      const tickets = state.tickets.map((ticket) =>
        ticket.id === state.selectedRecord ? { ...ticket, status: 'resolved' as const } : ticket,
      );
      return log({ ...state, tickets, counts: getCounts(tickets, state.agents), storageStatus: 'saved' }, 'Ticket resolved');
    }
    case 'ticket:note':
      return log({ ...state, storageStatus: 'saved' }, 'Internal note added');
    case 'load:retry':
      return log({ ...state, storageStatus: 'restored', lastError: null }, 'Connection restored');
    case 'load:recover':
      return log({ ...state, storageStatus: 'recovered', lastError: null }, 'Draft recovered');
    case 'filters:clear':
      return log({ ...state, activePanel: 'all-records', lastError: null }, 'Filters cleared');
    case 'status:update':
      return log({ ...state, storageStatus: 'saved' }, 'Status updated');
    case 'ticket:take':
      return log({ ...state, storageStatus: 'saved' }, 'Ticket assigned to current agent');
    case 'agent:away': {
      const agents = state.agents.map((agent) => (agent.id === action.agentId ? { ...agent, status: 'away' as const } : agent));
      return log({ ...state, agents, counts: getCounts(state.tickets, agents), storageStatus: 'saved' }, 'Away status set');
    }
    case 'workload:bulk-reassign': {
      const tickets = state.tickets.map((ticket) => (ticket.ownerId === action.fromAgentId ? { ...ticket, ownerId: action.toAgentId } : ticket));
      return log({ ...state, tickets, storageStatus: 'saved' }, 'Over-capacity workload reassigned');
    }
    case 'preferences:save':
      return log({ ...state, storageStatus: 'saved', lastError: null }, 'Preferences saved');
    case 'preferences:reset':
      clearPersistedState();
      return log(
        {
          ...state,
          preferences: defaultPreferences,
          storageStatus: 'saved',
          lastError: null,
        },
        'Local data cleared and preferences reset',
      );
    case 'insights:export':
      return log({ ...state, storageStatus: 'saved' }, 'Insight summary exported');
    case 'insights:report':
      return log({ ...state, activePanel: 'scheduled-report', storageStatus: 'saved' }, 'Report created');
    case 'action:record':
      return log({ ...state, storageStatus: 'saved', lastError: null }, action.label);
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, buildInitialState);

  useEffect(() => {
    try {
      persistState(state);
    } catch {
      // localStorage can be unavailable in locked-down browser contexts.
    }
  }, [state]);

  const navigate = useCallback((route: SurfaceRoute) => dispatch({ type: 'navigate', route }), []);

  const actions: AppActions = useMemo(
    () => ({
      navigate,
      selectRecord: (recordId) => dispatch({ type: 'select', recordId }),
      createTicket: () => dispatch({ type: 'ticket:create' }),
      saveTicket: () => dispatch({ type: 'ticket:save' }),
      discardTicket: () => dispatch({ type: 'ticket:discard' }),
      retryLoad: () => dispatch({ type: 'load:retry' }),
      recoverDraft: () => dispatch({ type: 'load:recover' }),
      clearFilters: () => dispatch({ type: 'filters:clear' }),
      updateStatus: () => dispatch({ type: 'status:update' }),
      takeTicket: () => dispatch({ type: 'ticket:take' }),
      resolveTicket: () => dispatch({ type: 'ticket:resolve' }),
      addNote: () => dispatch({ type: 'ticket:note' }),
      setAwayStatus: (agentId) => dispatch({ type: 'agent:away', agentId }),
      bulkReassign: (fromAgentId, toAgentId) => dispatch({ type: 'workload:bulk-reassign', fromAgentId, toAgentId }),
      savePreferences: () => dispatch({ type: 'preferences:save' }),
      resetPreferences: () => dispatch({ type: 'preferences:reset' }),
      exportSummary: () => dispatch({ type: 'insights:export' }),
      createReport: () => dispatch({ type: 'insights:report' }),
      recordAction: (label) => dispatch({ type: 'action:record', label }),
    }),
    [navigate],
  );

  return { state, actions };
}
