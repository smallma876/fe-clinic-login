import { apiUrl } from '../../../../globals';
import ClinicError from '../../../../shared/clinic-error.ts/ClinicError';
import { LoginRequest } from '../../domain/login';

const resource = '/cli-api/user';

const login = async ({ document, password }: LoginRequest) => {
  const response = await fetch(`${apiUrl}${resource}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ document, password }),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new ClinicError({ statusCode: response.status, ...result });
};

export const userProxy = {
  login,
};
