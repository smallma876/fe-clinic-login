import { DashboardAction, DashboardActionsType } from '../domain/dashboard-actions.enum';
import { Patient } from '../domain/patient';

export interface DashboardState {
  patient: Patient | null;
}

export const dashboardInitialState: DashboardState = {
  patient: null,
};

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case DashboardActionsType.SetPatient:
      return { ...state, patient: action.payload };
    default:
      throw Error('unknow action');
  }
};
