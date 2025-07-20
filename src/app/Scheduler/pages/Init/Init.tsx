import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { SchedulerProxy } from '../../proxy/scheduler';
import Card from '@/shared/components/Card';
import { CardType } from '@/shared/components/Card/card.enum';
import ButtonPrimary from '@/shared/components/ButtonPrimary/ButtonPrimary';
import TextField from '@/shared/components/TextField/TextField';

const Init = () => {
  const navigate = useNavigate();

  const onContinue = () => {
    navigate('/scheduler/service-type');
  };

  useEffect(() => {
    const getInitData = async () => {
      const patient = await SchedulerProxy.getPatient();
      console.log({ patient });
    };

    getInitData();
  }, []);

  return (
    <div>
      <TextField
        id="documentField"
        label="Documento"
      />
      
      <Card type={CardType.Secondary}>
        <h3>Para quien es la cita?</h3>
        <Card>
          <h3>Sergio Ruben Mallma Chavez</h3>
          <input type="checkbox" />
        </Card>
      </Card>

      <ButtonPrimary onClick={onContinue}>Continuar</ButtonPrimary>
    </div>
  );
};

export default Init;
