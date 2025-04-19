import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { DashboardRoutes } from './dashboard-routes.enum';
import DashboardLayout from './layouts/DashboardLayout';
import ErrorBoundary from '../../shared/components/ErrorBoundary';
import { useAppState } from '../../store/app-context';
import { DashboardProvider } from './store/dashboard-provider';

const Init = lazy(() => import('./pages/Init/Init'));
const Appointments = lazy(() => import('./pages/Appointments/Appointments'));

const DashboardRouter = () => {
  const { error } = useAppState();

  return (
    <DashboardProvider>
      <Suspense fallback={<div> ...cargando</div>}>
        <ErrorBoundary error={error}>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path={DashboardRoutes.Init} element={<Init />} />
              <Route path={DashboardRoutes.Appointments} element={<Appointments />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </DashboardProvider>
  );
};

export default DashboardRouter;
