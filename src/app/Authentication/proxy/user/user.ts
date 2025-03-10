import ClinicError from '../../../../shared/clinic-error.ts/ClinicError';
import { LoginRequest } from '../../domain/login';

const api = '/cli-api/auth';

const login = async ({ document, password }: LoginRequest) => {
  const response = await fetch(`${api}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ document, password }),
  });

  const result = await response.json();
  
  if (response.ok) {
    console.log('Redirección seguida automáticamente');
    return;
  }

  throw new ClinicError(result);
};

export const userProxy = {
  login,
};
