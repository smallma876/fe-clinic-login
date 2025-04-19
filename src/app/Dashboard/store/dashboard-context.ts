import { createContext, useContext } from 'react';
import { DashboardState } from './dashboard-reducer';
import { DashboardDispatch } from '../domain/dashboard-actions.enum';

export const DashboardStateContext = createContext<DashboardState | undefined>(undefined);
export const DashboardDispatchContext = createContext<DashboardDispatch | undefined>(undefined);

export const useGetDashboardState = () => {
  const context = useContext(DashboardStateContext);

  if (!context) {
    throw Error('useGetDashboardStateContext should use inside a provider');
  }

  return context;
};

export const useGetDashboardDispatch = () => {
  const context = useContext(DashboardDispatchContext);

  if (!context) {
    throw Error('useGetDashboardDispatchContext should use inside a provider');
  }

  return context;
};
