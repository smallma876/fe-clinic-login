import { AppAction, AppActionsType } from '../domain/app-actions.enum';
import { AppState } from '../domain/app-context.interface';
import { ClinicErrorPresentation } from '../domain/clinic-error-presentation.interface';

export const appInitialState: AppState = {
  error: null,
  loading: false,
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionsType.SET_ERROR:
      return { ...state, error: action.payload as ClinicErrorPresentation };
    case AppActionsType.CLEAR_ERROR:
      return { ...state, error: null };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CLEAR_LOADING':
      return { ...state, loading: false };
    default:
      return state;
  }
};
