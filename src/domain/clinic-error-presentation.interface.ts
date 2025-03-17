export interface ClinicErrorPresentation {
  message: string;
  code: string;
  timestamp: string;
  presentation: string;
  title: string;
  buttonLabel: string;
  onClickErrorPresentation: (buttonLabel: string) => void;
}
