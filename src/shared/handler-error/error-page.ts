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
  const { code } = error;

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
