import { ClinicErrorPresentation } from './clinic-error-presentation.interface';

export interface AppState {
  loading: boolean;
  error: ClinicErrorPresentation | null;
}
