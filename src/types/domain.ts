export type SurfaceRoute =
  | 'operations'
  | 'editor'
  | 'queues'
  | 'workload'
  | 'insights'
  | 'settings'
  | 'support';

export type StorageStatus = 'idle' | 'restored' | 'saved' | 'recovered' | 'error';

export type TicketStatus = 'open' | 'in-progress' | 'resolved';

export type AgentStatus = 'available' | 'at-capacity' | 'over-capacity' | 'away';

export interface TicketRecord {
  id: string;
  title: string;
  queue: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: TicketStatus;
  ownerId?: string;
  slaMinutesRemaining: number;
}

export interface AgentRecord {
  id: string;
  name: string;
  tier: string;
  status: AgentStatus;
  activeLoad: number;
}

export interface SurfacePreferences {
  density: 'comfortable' | 'compact';
  notifications: boolean;
}

export interface SurfaceCounts {
  tickets: number;
  openTickets: number;
  queues: number;
  availableAgents: number;
  urgentTickets: number;
}

export interface AppState {
  activeScreen: SurfaceRoute;
  route: SurfaceRoute;
  selectedRecord: string | null;
  selectedTicketId: string | null;
  activePanel: string;
  counts: SurfaceCounts;
  storageStatus: StorageStatus;
  lastError: string | null;
  tickets: TicketRecord[];
  agents: AgentRecord[];
  preferences: SurfacePreferences;
  actionLog: string[];
}

export interface AppActions {
  navigate: (route: SurfaceRoute) => void;
  selectRecord: (recordId: string | null) => void;
  createTicket: () => void;
  saveTicket: () => void;
  discardTicket: () => void;
  retryLoad: () => void;
  recoverDraft: () => void;
  clearFilters: () => void;
  updateStatus: () => void;
  takeTicket: () => void;
  resolveTicket: () => void;
  addNote: () => void;
  setAwayStatus: () => void;
  bulkReassign: () => void;
  savePreferences: () => void;
  resetPreferences: () => void;
  exportSummary: () => void;
  createReport: () => void;
  recordAction: (label: string) => void;
}

export interface AppBridge {
  state: AppState;
  actions: AppActions;
}

declare global {
  var app: AppBridge | undefined;

  interface Window {
    app?: AppBridge;
  }
}
