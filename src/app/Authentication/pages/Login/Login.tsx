import { FC } from 'react';
import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { LoginInputs } from './login-validate';
import { useNavigate } from 'react-router';
import { userProxy } from '../../proxy/user/user';

const Login: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<LoginInputs>({
    mode: 'all',
  });

  const onRegister = () => {
    navigate('/register');
  };

  const onLogin = async () => {
    try {
      const { document, password } = getValues();
      await userProxy.login({
        document,
        password,
      });
      console.log('login success');
      window.location.href = 'http://localhost:5176/dashboard/init';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.loginForm}>
      <h1>Login</h1>
      <p>Log in to access the full dashboard</p>
      <label htmlFor="document">Tipo de documento</label>
      <select id="typeDocument" {...register('typeDocument', { required: 'type document is required' })}>
        <option value="">selecciona</option>
        <option value="dni">DNI</option>
        <option value="passport">PASAPORTE</option>
      </select>
      <label htmlFor="document">Nombre de usuario</label>
      <input
        type="text"
        placeholder="document"
        id="document"
        {...register('document', { required: 'Document is required' })}
      />
      <label htmlFor="password">Contrasena</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        {...register('password', { required: 'Password is required' })}
      />
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
