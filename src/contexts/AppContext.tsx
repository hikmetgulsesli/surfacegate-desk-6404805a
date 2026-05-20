import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useAppState } from '../hooks/useAppState';
import type { AppActions, AppState } from '../types/domain';

interface AppContextValue {
  state: AppState;
  actions: AppActions;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const value = useAppState();

  useEffect(() => {
    window.app = { state: value.state, actions: value.actions };
    globalThis.app = { state: value.state, actions: value.actions };
  }, [value.state, value.actions]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);

  if (!value) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return value;
}
