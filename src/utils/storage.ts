import type { AppState, SurfacePreferences } from '../types/domain';

const STORAGE_KEY = 'surfacegate-desk-state-v1';

interface PersistedState {
  activeScreen: AppState['activeScreen'];
  selectedRecord: string | null;
  activePanel: string;
  preferences: SurfacePreferences;
}

export function loadPersistedState(): { data: Partial<PersistedState>; error: string | null } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { data: {}, error: null };
    }

    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return { data: parsed, error: null };
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
