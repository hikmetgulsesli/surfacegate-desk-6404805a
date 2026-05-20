import type { AppState, SurfacePreferences } from '../types/domain';

const STORAGE_KEY = 'surfacegate-desk-state-v1';

interface PersistedState {
  activeScreen: AppState['activeScreen'];
  selectedRecord: string | null;
  activePanel: string;
  preferences: SurfacePreferences;
}

const validScreens = new Set<AppState['activeScreen']>(['operations', 'editor', 'queues', 'workload', 'insights', 'settings', 'support']);

function isRecordId(value: unknown): value is string | null {
  return typeof value === 'string' || value === null;
}

function isPreferences(value: unknown): value is SurfacePreferences {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const preferences = value as Partial<SurfacePreferences>;
  return (
    (preferences.density === 'comfortable' || preferences.density === 'compact') &&
    typeof preferences.notifications === 'boolean'
  );
}

function toPersistedState(value: unknown): Partial<PersistedState> {
  if (!value || typeof value !== 'object') {
    return {};
  }

  const source = value as Partial<PersistedState>;
  const data: Partial<PersistedState> = {};

  if (source.activeScreen && validScreens.has(source.activeScreen)) {
    data.activeScreen = source.activeScreen;
  }

  if (isRecordId(source.selectedRecord)) {
    data.selectedRecord = source.selectedRecord;
  }

  if (typeof source.activePanel === 'string') {
    data.activePanel = source.activePanel;
  }

  if (isPreferences(source.preferences)) {
    data.preferences = source.preferences;
  }

  return data;
}

export function loadPersistedState(): { data: Partial<PersistedState>; error: string | null } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { data: {}, error: null };
    }

    return { data: toPersistedState(JSON.parse(raw)), error: null };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return {
      data: {},
      error: 'Saved SurfaceGate Desk data was corrupt and has been reset.',
    };
  }
}

export function persistState(state: AppState) {
  const persisted: PersistedState = {
    activeScreen: state.activeScreen,
    selectedRecord: state.selectedRecord,
    activePanel: state.activePanel,
    preferences: state.preferences,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

export function clearPersistedState() {
  window.localStorage.removeItem(STORAGE_KEY);
}
