import { ObjectDispatch } from '../../../domain/app-reducer.interface';

export enum DashboardActionsType {
  SetPatient = 'SET_PATIENT',
}

export type DashboardAction = ObjectDispatch<DashboardActionsType>;
export type DashboardDispatch = React.Dispatch<DashboardAction>;
