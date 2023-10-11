import { AxiosError } from 'axios';
import { FC } from 'react';
import { checkUsernameExists } from '../../../utils/api';
import {
  InputContainer,
  InputContainerHeader,
  InputError,
  InputField,
  InputLabel,
} from '../../../utils/styles';
import { RegisterFormFieldProps } from '../../../utils/types/form';

export const UsernameField: FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  console.log('Username Errors: ', errors?.username?.message);
  return (
    <InputContainer>
      <InputContainerHeader>
        <InputLabel htmlFor="username">Username</InputLabel>
      </InputContainerHeader>
      <InputField
        type="text"
        id="username"
      />
    </InputContainer>
  );
};
