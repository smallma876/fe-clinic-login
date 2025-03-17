import { ObjectDispatch } from './app-reducer.interface';

export enum AppActionsType {
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SET_LOADING = 'SET_LOADING',
  CLEAR_LOADING = 'CLEAR_LOADING',
}

export type AppAction = ObjectDispatch<AppActionsType>;
export type AppDispatch = React.Dispatch<AppAction>;
