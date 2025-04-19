import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Init = lazy(() => import('./pages/Init/Init'));
const SelectDoctor = lazy(() => import('./pages/SelectDoctor/SelectDoctor'));
const Specialty = lazy(() => import('./pages/Specialty/Specialty'));
const ServiceType = lazy(() => import('./pages/ServiceType/ServiceType'));

const SchedulerRouter = () => {
  return (
    <Routes>
      <Route path="/init" element={<Init />} />
      <Route path="/select-doctor" element={<SelectDoctor />} />
      <Route path="/speciality" element={<Specialty />} />
      <Route path="/service-type" element={<ServiceType />} />
    </Routes>
  );
};

export default SchedulerRouter;
