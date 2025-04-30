import TextField from '@/shared/components/TextField/TextField';
import { FC } from 'react';

const UserAndPassword: FC = () => {
  return (
    <>
      <TextField id="documentType" />
      <TextField id="documentNumber" />
    </>
  );
};

export default UserAndPassword;
