import { Link } from 'react-router';
import styles from './menu-bar.module.css';

const MenuBar = () => {
  return (
    <>
      <div className={styles.menubar}>
        <div>
          <img src="/logo.svg" alt="logo" className={styles.logosvg} />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/dashboard/init">Inicio</Link>
            </li>
            <li>
              <Link to="/scheduler/init">Agendar cita</Link>
            </li>
            <li>
              <Link to="/dashboard/appointments">Mis citas</Link>
            </li>
            <li>
              <Link to="/dashboard/mis-documentos">Mis documentos</Link>
            </li>
            <li>
              <Link to="/dashboard/mi-perfil">Mi perfil</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
