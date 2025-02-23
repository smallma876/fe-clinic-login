import { LoginRequest } from '../../domain/login';

const api = '/cli-api/auth';

const login = async ({ document, password }: LoginRequest) => {
  const response = await fetch(`${api}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ document, password }),
  });

  if (response.ok) {
    console.log('Redirección seguida automáticamente');
    return;
  }

  const result = await response.json();
  throw new Error(result.message);
};

export const userProxy = {
  login,
};
