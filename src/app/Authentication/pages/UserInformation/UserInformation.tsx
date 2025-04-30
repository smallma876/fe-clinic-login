import TextField from '@/shared/components/TextField/TextField';

const UserInformation = () => {
  return (
    <>
      <TextField id="password" />
      <TextField id="name" />
      <TextField id="lastName1" />
      <TextField id="lastName2" />
      <TextField id="birthDate" />
      <TextField id="email" />
      <TextField id="phone" />
      <TextField id="mobilePhone" />
      <TextField id="gender" />
      <TextField id="maritalStatus" />
      <TextField id="domicileStreet" />
      <TextField id="termsAndConditionFlag" />
      <TextField id="promotionsFlag" />
    </>
  );
};

export default UserInformation;
