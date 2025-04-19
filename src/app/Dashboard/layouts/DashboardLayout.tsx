import { Outlet } from 'react-router';
import MenuBar from '../../../components/MenuBar/MenuBar';
import styles from './dashboard-layout.module.css';

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
