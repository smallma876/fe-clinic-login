import { useEffect } from 'react';
import Card from '@/shared/components/Card';
import ButtonPrimary from '@/shared/components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@/shared/components/ButtonSecondary/ButtonSecondary';
import styles from './init.module.css';
import { PatientProxy } from '../../proxy/patient-proxy';
import { DashboardActionsType } from '../../domain/dashboard-actions.enum';
import { useGetDashboardDispatch } from '../../store/dashboard-context';
import { handlerError } from '../../../../shared/handler-error/handler-error';
import ClinicError from '../../../../shared/clinic-error.ts/ClinicError';
import { useAppDispatch } from '../../../../store/app-context';

const Init = () => {
  const dispatchApp = useAppDispatch();
  const dashboardDispatch = useGetDashboardDispatch();

  useEffect(() => {
    const getInitData = async () => {
      try {
        const response = await PatientProxy.getPatient();
        dashboardDispatch({ type: DashboardActionsType.SetPatient, payload: response });
      } catch (error) {
        console.log('error');
        handlerError({ dispatchApp, error: error as ClinicError });
      }
    };

    getInitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.init}>
      <div className={styles.header}>
        <Card>
          <h2>Sergio Ruben, bienvenido a tu Clinica Online</h2>
          <p>
            En clinica online cuidamos de tu salud desde la comodida de tu hogar. Agenda citas y
            accede a tu historial de forma rapida y segura, todo en su lugar.
          </p>
          <ButtonPrimary>Agendar cita</ButtonPrimary>
        </Card>
      </div>
      <div className={styles.block1}>
        <Card>
          <h2>Consulta tus resultados</h2>
          <p>informate aqui sobre tus resultados de laboratorio.</p>
          <ButtonSecondary>Ver resultados</ButtonSecondary>
        </Card>
      </div>
      <div className={styles.block2}>
        <Card>
          <h2>Centro estetico</h2>
          <p>Conoce nuestro nuevo centro estetico en sede Surco y agenda una cita.</p>
          <ButtonSecondary>Agenda una cita</ButtonSecondary>
        </Card>
      </div>
      <div className={styles.block3}>
        <Card>
          <h2>Gestiona tus datos aqui</h2>
          <p>Actualiza tus datos de forma rapida y manten tu informacion siempre al dia.</p>
          <ButtonSecondary>Ir a mi perfil</ButtonSecondary>
        </Card>
      </div>
    </div>
  );
};

export default Init;
