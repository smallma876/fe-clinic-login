import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userProxy } from '../../proxy/user/user';
import { LoginFields, LoginInputs, LoginSchema } from './login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import ClinicError from '@/shared/clinic-error.ts/ClinicError';
import { useAppDispatch } from '@/store/app-context';
import { handlerError } from '@/shared/handler-error/handler-error';
import { ButtonPrimary, ButtonSecondary, Checkbox, PasswordField, Selector, TextField } from '@sergio.mallma/fe-clinic-components';

const Login: FC = () => {
  const dispatchApp = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { isValid, errors },
  } = useForm<LoginInputs>({
    mode: 'onChange',
    resolver: yupResolver<LoginInputs>(LoginSchema),
    defaultValues: {
      typeDocument: 'dni',
      document: '',
      password: '',
    },
  });

  const onRegister = () => {
    navigate('/register');
  };

  const onLogin = async () => {
    try {
      const { document, password } = getValues();
      await userProxy.login({ document, password });

      navigate('/dashboard/init');
    } catch (error) {
      handlerError({ dispatchApp, error: error as ClinicError });
    }
  };

  return (
    <form className="flex flex-col w-full">
      <h1>Login</h1>
      <p>Ingresa tus datos para ingresar</p>
      <Selector
        id='documentType'
        label='Tipo de documento'
      >
        <option value="dni">DNI</option>
        <option value="passport">PASAPORTE</option>
      </Selector>
      <TextField
        label='Documento'
        id="document"
        placeholder="document"
       /*  error={{ message: errors[LoginFields.Document]?.message ?? "" }}
        {...register('document', { required: 'Document is required' })} */
      />
      <PasswordField
        label='Contraseña'
        placeholder="password"
        id="password"
        error={{ message: errors[LoginFields.Password]?.message ?? "" }}
        {...register('password', { required: 'Password is required' })}
      />
      <Checkbox
        id="remember"
        label='Recordar usuario'
        value="remember"
      />
      <ButtonPrimary onClick={onLogin} isLoading={false} disabled={!isValid}>
        Ingresar
      </ButtonPrimary>
      <ButtonSecondary onClick={onRegister}>Registrar</ButtonSecondary>
    </form>
  );
};

export default Login;
