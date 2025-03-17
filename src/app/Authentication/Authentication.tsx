import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { AuthenticationRoutes } from './authentication-routes';
import ErrorBoundary from '../../shared/components/ErrorBoundary';
import { useAppState } from '../../store/app-context';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

const Authentication = () => {
  const { error } = useAppState();

  return (
    <Suspense fallback={<div> ...cargando</div>}>
      <ErrorBoundary error={error}>
        <Routes>
          <Route path={AuthenticationRoutes.login} element={<Login />} />
          <Route path={AuthenticationRoutes.register} element={<Register />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Authentication;
