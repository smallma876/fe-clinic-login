import { ClinicErrorPresentation } from '../../domain/clinic-error-presentation.interface';
import ClinicError from '../clinic-error.ts/ClinicError';

export const getErrorPage = (error: ClinicError): ClinicErrorPresentation => {
  const { message, code, title } = error;

  return {
    message,
    code,
    title,
    status: 500,
    timestamp: new Date().toISOString(),
    presentation: 'Error presentation',
  };
};
