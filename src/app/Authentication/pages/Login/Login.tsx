import { FC } from 'react';
import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userProxy } from '../../proxy/user/user';
import { LoginFields, LoginInputs, LoginSchema } from './login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { handlerError } from '../../../../shared/handler-error/handler-error';
import { useAppDispatch } from '../../../../store/app-context';
import ClinicError from '../../../../shared/clinic-error.ts/ClinicError';

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

      window.location.href = 'http://localhost:5175/dashboard/init';
    } catch (error) {
      handlerError({ dispatchApp, error: error as ClinicError });
    }
  };

  return (
    <form className={styles.loginForm}>
      <h1>Login</h1>
      <p>Ingresa tus datos para ingresar</p>
      <label htmlFor="document">Tipo de documento</label>
      <select
        id="typeDocument"
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
        {...register('document', { required: 'Document is required' })}
      />
      {errors[LoginFields.Document] && <p>{errors[LoginFields.Document].message}</p>}
      <label htmlFor="password">Contrasena</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        {...register('password', { required: 'Password is required' })}
      />
      {errors[LoginFields.Password] && <p>{errors[LoginFields.Password].message}</p>}
      <label htmlFor="remember">
        Recordar usuario
        <input type="checkbox" id="remember" name="remember" value="remember" />
      </label>

      <button type="button" disabled={!isValid} onClick={onLogin}>
        Login in
      </button>
      <button type="button" onClick={onRegister}>
        Registrar
      </button>
    </form>
  );
};

export default Login;
