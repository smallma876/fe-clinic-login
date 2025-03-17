import { FC } from 'react';
import { ClinicErrorPresentation } from '../../../domain/clinic-error-presentation.interface';

interface ErrorPageProps {
  error: ClinicErrorPresentation;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  console.log('ErrorPage', error);
  const { message, title, buttonLabel, onClickErrorPresentation } = error;
  console.log('ErrorPage-1', error);
  return (
    <div>
      <h1>Error Page</h1>
      <h2>{title}</h2>
      <h3>{message}</h3>
      <button onClick={() => onClickErrorPresentation(buttonLabel)}>{buttonLabel}</button>
    </div>
  );
};

export default ErrorPage;
