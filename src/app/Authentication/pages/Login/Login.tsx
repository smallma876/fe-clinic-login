import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userProxy } from '../../proxy/user/user';
import { LoginFields, LoginInputs, LoginSchema } from './login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import ClinicError from '@/shared/clinic-error.ts/ClinicError';
import { useAppDispatch } from '@/store/app-context';
import { handlerError } from '@/shared/handler-error/handler-error';
/* import ButtonPrimary from '@/shared/components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@/shared/components/ButtonSecondary/ButtonSecondary'; */
import TextField from '@/shared/components/TextField/TextField';
import Selector from '@/shared/components/Selector/Selector';
import PasswordField from '@/shared/components/PasswordField/PasswordField';
import Checkbox from '@/shared/components/Checkbox/Checkbox';
import ButtonPrimary from 'fe-clinic-components/';

const Login: FC = () => {
  const dispatchApp = useAppDispatch();
  const navigate = useNavigate();
  const [saveUser, setSaveUser] = useState(false);

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
      <p>En Clinica Esperanza nos preocupamos por ti.</p>
      {errors[LoginFields.TypeDocument] && <p>{errors[LoginFields.TypeDocument].message}</p>}
      <Selector id="typeDocumentField" label="Tipo de documento">
        <option value="DNI">DNI</option>
        <option value="RUC">RUC</option>
      </Selector>
      <TextField
        id="documentField"
        label="Documento"
        error={{ message: errors[LoginFields.Document]?.message || '' }}
        {...register('document', { required: 'Document is required' })}
      />
      <PasswordField
        label="Contraseña"
        id="passwordField"
        placeholder="password"
        error={{ message: errors[LoginFields.Password]?.message || '' }}
        {...register('password', { required: 'Password is required' })}
      />
      {/* <label htmlFor="remember">
        Recordar usuario
        <input type="checkbox" id="remember" name="remember" value="remember" />
      </label> */}
      <Checkbox
        id={'rememberField'}
        label="Recordar usuario"
        checked={saveUser}
        onChange={() => {
          setSaveUser(!saveUser);
        }}
      />
      <ButtonPrimary onClick={onLogin} isLoading={false} disabled={!isValid}>
        Login 2
      </ButtonPrimary>
      <ButtonSecondary onClick={onRegister}>Registrar 2</ButtonSecondary>
    </form>
  );
};

export default Login;
