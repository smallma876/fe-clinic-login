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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { message, code, title } = error;

  return {
    message: 'Error Inesperado',
    code,
    title: 'Uy ocurrío un error',
    timestamp: new Date().toISOString(),
    presentation: 'Error presentation',
    buttonLabel: 'Volver a intentar',
    onClickErrorPresentation: onClickPrimary,
  };
};
