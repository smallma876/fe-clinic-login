import { FC, useReducer } from 'react';
import { appInitialState, appReducer } from './app-reducer';
import { appStateContext, appDispatchContext } from './app-context';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);

  return (
    <appStateContext.Provider value={appState}>
      <appDispatchContext.Provider value={appDispatch}>{children}</appDispatchContext.Provider>
    </appStateContext.Provider>
  );
};
