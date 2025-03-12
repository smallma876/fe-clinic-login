import React, { FC } from 'react';
import { ClinicErrorPresentation } from '../../../domain/clinic-error-presentation.interface';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  error: ClinicErrorPresentation | null;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, error }) => {
  if (error) {
    return <div>ErrorBoundary</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
