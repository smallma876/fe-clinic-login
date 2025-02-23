export enum LoginFields {
  typeDocument = 'typeDocument',
  document = 'document',
  password = 'password',
}

export interface LoginInputs {
  typeDocument: string;
  document: string;
  password: string;
}
