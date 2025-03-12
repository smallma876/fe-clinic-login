import { createContext, Dispatch, useContext } from 'react';
import { AppState } from '../domain/app-context.interface';
import { AppAction } from '../domain/app-actions.enum';

export const appStateContext = createContext<AppState | undefined>(undefined);
export const appDispatchContext = createContext<Dispatch<AppAction> | undefined>(undefined);

export const useAppState = (): AppState => {
  const context = useContext(appStateContext);
  if (!context) {
    throw new Error('useAppStateContext must be used within a AppStateProvider');
  }
  return context;
};

export const useAppDispatch = (): Dispatch<AppAction> => {
  const context = useContext(appDispatchContext);
  if (!context) {
    throw new Error('useAppDispatchContext must be used within a AppStateProvider');
  }
  return context;
};
