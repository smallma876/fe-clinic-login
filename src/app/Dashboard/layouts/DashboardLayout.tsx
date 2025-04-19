import { Outlet } from 'react-router';
import styles from './dashboard-layout.module.css';
import MenuBar from '@/shared/components/MenuBar/MenuBar';

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardlayout}>
      <div className={styles.menubar}>
        <MenuBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
