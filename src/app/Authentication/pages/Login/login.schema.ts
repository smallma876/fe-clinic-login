import { object as yupObject, string as yupString } from 'yup';
import { DniRegex, PassportRegex } from '../../../../shared/regex/regex';

export enum LoginFields {
  TypeDocument = 'typeDocument',
  Document = 'document',
  Password = 'password',
}

export interface LoginInputs {
  [LoginFields.TypeDocument]: string;
  [LoginFields.Document]: string;
  [LoginFields.Password]: string;
}

export const LoginSchema = yupObject<LoginInputs>().shape({
  typeDocument: yupString().required('Seleccione un tipo documento'),
  document: yupString()
    .when(LoginFields.TypeDocument, {
      is: 'dni',
      then: () =>
        yupString()
          .required('campo obligatorio')
          .matches(DniRegex, 'formato incorrecto')
          .length(8, 'debe tener 8 caracteres'),
    })
    .when(LoginFields.TypeDocument, {
      is: 'passport',
      then: () =>
        yupString()
          .required('campo obligatorio')
          .matches(PassportRegex, 'formato incorrecto')
          .min(6, 'desde 6 a 8 caracteres')
          .max(9, 'desde 6 a 8 caracteres'),
    })
    .default(''),
  password: yupString().required('campo obligatorio'),
});
