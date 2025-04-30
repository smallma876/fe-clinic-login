import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userProxy } from '../../proxy/user/user';
import { LoginFields, LoginInputs, LoginSchema } from './login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import ClinicError from '@/shared/clinic-error.ts/ClinicError';
import { useAppDispatch } from '@/store/app-context';
import { handlerError } from '@/shared/handler-error/handler-error';
import ButtonPrimary from '@/shared/components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@/shared/components/ButtonSecondary/ButtonSecondary';

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
    <form className="flex flex-col">
      <h1>Login</h1>
      <p>Ingresa tus datos para ingresar</p>
      <label htmlFor="document">Tipo de documento</label>
      <select
        id="typeDocument"
        className="rounded-sm border-1"
        {...register('typeDocument', { required: 'type document is required' })}
      >
        <option value="dni">DNI</option>
        <option value="passport">PASAPORTE</option>
      </select>
      {errors[LoginFields.TypeDocument] && <p>{errors[LoginFields.TypeDocument].message}</p>}
      <label htmlFor="document">Documento</label>
      <input
        type="text"
        placeholder="document"
        id="document"
        className="rounded-sm border-1"
        {...register('document', { required: 'Document is required' })}
      />
      {errors[LoginFields.Document] && <p>{errors[LoginFields.Document].message}</p>}
      <label htmlFor="password">Contrasena</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        className="rounded-sm border-1"
        {...register('password', { required: 'Password is required' })}
      />
      {errors[LoginFields.Password] && <p>{errors[LoginFields.Password].message}</p>}
      <label htmlFor="remember">
        Recordar usuario
        <input type="checkbox" id="remember" name="remember" value="remember" />
      </label>
      <ButtonPrimary onClick={onLogin} isLoading={false} disabled={!isValid}>
        Login 2
      </ButtonPrimary>
      <ButtonSecondary onClick={onRegister}>Registrar 2</ButtonSecondary>
    </form>
  );
};

export default Login;
