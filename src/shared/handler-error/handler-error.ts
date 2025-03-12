import { AppActionsType, AppDispatch } from '../../domain/app-actions.enum';
import ClinicError from '../clinic-error.ts/ClinicError';
import { getErrorPage } from './error-page';

interface HandlerError {
  error: ClinicError;
  dispatchApp: AppDispatch;
}

export const handlerError = ({ error, dispatchApp }: HandlerError) => {
  const errorPresentation = getErrorPage(error);

  dispatchApp({
    type: AppActionsType.SET_ERROR,
    payload: errorPresentation,
  });
};
