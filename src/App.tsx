import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

const Authentication = lazy(() => import('./app/Authentication/Authentication'));
const DashboardRouter = lazy(() => import('./app/Dashboard/DashboardRouter'));
const SchedulerRouter = lazy(() => import('./app/Scheduler/SchedulerRouter'));

const App = () => {
  return (
    <Routes>
      <Route path="/authentication/*" element={<Authentication />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      <Route path="/scheduler/*" element={<SchedulerRouter />} />
    </Routes>
  );
};

export default App;
