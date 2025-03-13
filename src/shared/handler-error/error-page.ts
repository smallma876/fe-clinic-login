import { ClinicErrorPresentation } from '../../domain/clinic-error-presentation.interface';
import ClinicError from '../clinic-error.ts/ClinicError';

interface GetErrorPageProps {
  error: ClinicError;
  onClickPrimary: (buttonLabel: string) => void;
}

export const getErrorPage = ({
  error,
  onClickPrimary,
}: GetErrorPageProps): ClinicErrorPresentation => {
  const { message, code, title } = error;

  return {
    message,
    code,
    title,
    timestamp: new Date().toISOString(),
    presentation: 'Error presentation',
    buttonLabel: 'Volver a intentar',
    onClickErrorPresentation: onClickPrimary,
  };
};
