import React, { FC } from 'react';
import { ClinicErrorPresentation } from '../../../domain/clinic-error-presentation.interface';
import ErrorPage from '../ErrorPage';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  error: ClinicErrorPresentation | null;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, error }) => {
  if (error) {
    return <ErrorPage error={error} />;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
