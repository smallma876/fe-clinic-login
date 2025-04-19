import { FC, useReducer } from 'react';
import { DashboardDispatchContext, DashboardStateContext } from './dashboard-context';
import { dashboardInitialState, dashboardReducer } from './dashboard-reducer';

export interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, dashboardInitialState);

  return (
    <DashboardStateContext.Provider value={state}>
      <DashboardDispatchContext value={dispatch}>{children}</DashboardDispatchContext>
    </DashboardStateContext.Provider>
  );
};
