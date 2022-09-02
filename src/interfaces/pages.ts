import { DeepRequired, FieldErrorsImpl, FieldValues } from "react-hook-form";

export interface ILoginRequest {
  email?: string;
  password?: string;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>
}

export interface IRegisterRequest {
  username?: string,
  name?: string;
  cpf?: string;
  adress?: string;
  email?: string;
  password?: string;
  password_confirm?: string;
  role?: string;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>
}