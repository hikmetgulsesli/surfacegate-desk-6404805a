import {
  AgentWorkloadSurfacegateDesk,
  EmptyAndErrorRecoverySurfacegateDesk,
  InsightsSurfacegateDesk,
  QueueAndStatusManagementSurfacegateDesk,
  SettingsAndPreferencesSurfacegateDesk,
  TicketEditorSurfacegateDesk,
  TicketOperationsSurfacegateDesk,
  type AgentWorkloadSurfacegateDeskActionId,
  type EmptyAndErrorRecoverySurfacegateDeskActionId,
  type InsightsSurfacegateDeskActionId,
  type QueueAndStatusManagementSurfacegateDeskActionId,
  type SettingsAndPreferencesSurfacegateDeskActionId,
  type TicketEditorSurfacegateDeskActionId,
  type TicketOperationsSurfacegateDeskActionId,
} from './screens';
import { AppProvider, useAppContext } from './contexts/AppContext';

function getPersistenceMessage(state: ReturnType<typeof useAppContext>['state']) {
  if (state.lastError) {
    return state.lastError;
  }

  const latestAction = state.actionLog[0];

  if (latestAction === 'Local data cleared and preferences reset') {
    return 'Local data cleared and preferences reset.';
  }

  if (state.storageStatus === 'recovered') {
    return 'Recovered local workspace data.';
  }

  if (state.storageStatus === 'restored') {
    return 'Loaded saved SurfaceGate Desk workspace.';
  }

  if (state.storageStatus === 'saved') {
    return 'SurfaceGate Desk workspace saved locally.';
  }

  return 'SurfaceGate Desk workspace ready.';
}

function PersistenceStatus() {
  const { state } = useAppContext();
  const isError = Boolean(state.lastError);

  return (
    <section
      aria-label="Persistence status"
      aria-live="polite"
      className={`fixed bottom-4 right-4 z-50 max-w-sm rounded border px-4 py-3 text-sm shadow-lg ${
        isError ? 'border-amber-300 bg-amber-50 text-amber-950' : 'border-emerald-200 bg-white text-slate-700'
      }`}
      data-testid="persistence-status"
    >
      <p className="font-semibold text-slate-950">Workspace persistence</p>
      <p>{getPersistenceMessage(state)}</p>
    </section>
  );
}

function AppShell() {
  const { state, actions } = useAppContext();
  const record = (label: string) => () => actions.recordAction(label);
  const sharedNavigation = {
    'operations-1': () => actions.navigate('operations'),
    'editor-2': () => actions.navigate('editor'),
    'queues-3': () => actions.navigate('queues'),
    'workload-4': () => actions.navigate('workload'),
    'insights-5': () => actions.navigate('insights'),
    'settings-6': () => actions.navigate('settings'),
  };

  return (
    <div data-setfarm-root="surfacegate-desk" data-active-screen={state.activeScreen} className="min-h-screen bg-slate-50 text-slate-950">
      {state.activeScreen === 'operations' && (
        <TicketOperationsSurfacegateDesk
          actions={
            {
              ...sharedNavigation,
              'create-ticket-1': actions.createTicket,
              'button-2-2': record('Opened operations utility 2'),
              'button-3-3': record('Opened operations utility 3'),
              'filter-4': actions.clearFilters,
              'sort-priority-5': actions.updateStatus,
              'button-6-6': record('Moved to previous ticket page'),
              'button-7-7': record('Moved to next ticket page'),
              'retry-connection-8': actions.retryLoad,
              'button-9-9': record('Opened ticket quick action 9'),
              'button-10-10': record('Opened ticket quick action 10'),
              'add-note-11': actions.addNote,
              'resolve-12': actions.resolveTicket,
              'help-7': () => actions.navigate('support'),
            } satisfies Partial<Record<TicketOperationsSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'editor' && (
        <TicketEditorSurfacegateDesk
          actions={
            {
              ...sharedNavigation,
              'create-ticket-1': actions.createTicket,
              'button-2-2': record('Opened editor utility 2'),
              'button-3-3': record('Opened editor utility 3'),
              'cancel-4': () => actions.navigate('operations'),
              'save-changes-5': actions.saveTicket,
              'recover-draft-6': actions.recoverDraft,
              'discard-ticket-7': actions.discardTicket,
              'help-7': () => actions.navigate('support'),
            } satisfies Partial<Record<TicketEditorSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'queues' && (
        <QueueAndStatusManagementSurfacegateDesk
          actions={
            {
              ...sharedNavigation,
              'create-ticket-1': actions.createTicket,
              'button-2-2': record('Opened queue utility 2'),
              'button-3-3': record('Opened queue utility 3'),
              'filter-my-teams-4': actions.clearFilters,
              'update-status-5': actions.updateStatus,
              'take-ticket-6': actions.takeTicket,
              'update-7': actions.updateStatus,
              'update-status-8': actions.updateStatus,
              'review-9': () => actions.selectRecord(state.selectedTicketId),
              'help-7': () => actions.navigate('support'),
            } satisfies Partial<Record<QueueAndStatusManagementSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'workload' && (
        <AgentWorkloadSurfacegateDesk
          actions={
            {
              ...sharedNavigation,
              'create-ticket-1': actions.createTicket,
              'button-2-2': record('Opened workload utility 2'),
              'button-3-3': record('Opened workload utility 3'),
              'ej-elena-jenkins-l2-specialist-over-capacity-act-4': () => actions.selectRecord('ej'),
              'mr-marcus-reed-l1-triage-at-capacity-active-load-5': () => actions.selectRecord('mr'),
              'sl-sarah-lin-l2-specialist-available-active-load-6': () => actions.selectRecord('sl'),
              'set-away-status-7': actions.setAwayStatus,
              'bulk-reassign-8': actions.bulkReassign,
              'view-all-24-tickets-9': () => actions.navigate('operations'),
              'button-10-10': record('Opened workload action 10'),
              'button-11-11': record('Opened workload action 11'),
              'button-12-12': record('Opened workload action 12'),
              'button-13-13': record('Opened workload action 13'),
              'help-7': () => actions.navigate('support'),
            } satisfies Partial<Record<AgentWorkloadSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'insights' && (
        <InsightsSurfacegateDesk
          actions={
            {
              ...sharedNavigation,
              'create-ticket-1': actions.createTicket,
              'button-2-2': record('Opened insights utility 2'),
              'button-3-3': record('Opened insights utility 3'),
              'export-summary-4': actions.exportSummary,
              'create-report-5': actions.createReport,
              'help-7': () => actions.navigate('support'),
            } satisfies Partial<Record<InsightsSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'settings' && (
        <SettingsAndPreferencesSurfacegateDesk
          actions={
            {
              'button-1-1': record('Opened settings utility 1'),
              'button-2-2': record('Opened settings utility 2'),
              'button-3-3': record('Opened settings utility 3'),
              'button-4-4': record('Opened settings utility 4'),
              'new-ticket-5': actions.createTicket,
              'act-retry-load-6': actions.retryLoad,
              'act-save-preferences-7': actions.savePreferences,
              'button-8-8': record('Opened preference action 8'),
              'new-filter-9': actions.clearFilters,
              'button-10-10': record('Opened preference action 10'),
              'button-11-11': record('Opened preference action 11'),
              'button-12-12': record('Opened preference action 12'),
              'button-13-13': record('Opened preference action 13'),
              'reset-to-factory-defaults-14': actions.resetPreferences,
              'operations-1': () => actions.navigate('operations'),
              'editor-2': () => actions.navigate('editor'),
              'queues-3': () => actions.navigate('queues'),
              'workload-4': () => actions.navigate('workload'),
              'insights-5': () => actions.navigate('insights'),
              'settings-6': () => actions.navigate('settings'),
              'support-7': () => actions.navigate('support'),
            } satisfies Partial<Record<SettingsAndPreferencesSurfacegateDeskActionId, () => void>>
          }
        />
      )}
      {state.activeScreen === 'support' && (
        <EmptyAndErrorRecoverySurfacegateDesk
          actions={
            {
              'button-1-1': record('Opened recovery action 1'),
              'button-2-2': record('Opened recovery action 2'),
              'button-3-3': record('Opened recovery action 3'),
              'button-4-4': record('Opened recovery action 4'),
              'create-ticket-5': actions.createTicket,
              'new-ticket-6': actions.createTicket,
              'close-7': () => actions.navigate('operations'),
              'close-8': () => actions.navigate('operations'),
              'clear-filters-9': actions.clearFilters,
              'act-retry-load-10': actions.retryLoad,
              'act-create-record-11': actions.createTicket,
              'operations-1': () => actions.navigate('operations'),
              'editor-2': () => actions.navigate('editor'),
              'queues-3': () => actions.navigate('queues'),
              'workload-4': () => actions.navigate('workload'),
              'insights-5': () => actions.navigate('insights'),
              'settings-6': () => actions.navigate('settings'),
              'support-7': () => actions.navigate('support'),
              'view-sla-guidelines-8': () => actions.navigate('insights'),
            } satisfies Partial<Record<EmptyAndErrorRecoverySurfacegateDeskActionId, () => void>>
          }
        />
      )}
      <PersistenceStatus />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
