import React from "react";
import { ISwitcher } from "./pages";
import { Id, ToastContent, ToastOptions } from "react-toastify";

export interface ISwitcherContext {
  screenSwitcher: ISwitcher;
  setScreenSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
  condicionModal: boolean;
  setCondicionlModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUser {
  username?: string;
  name: string;
  cpf?: string;
  adress?: IAdress;
  email?: string;
  password?: string;
  password_confirm?: string;
  role?: string;
  id: number;
}

export interface IAdress {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: string;
}

export interface IAuth {
  user: IUser;
  loading: boolean;
  cep: IAdress;
  cepError: boolean;
  cepRequest: (e: React.FocusEvent<HTMLInputElement, Element>) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export interface ICoreResponse {
  accessToken: string;
  user: IUser;
}

export interface INotification {
  updateToast: (toastRef: Id, message: string, type: string) => void;
  baseTemplate: [ToastContent, ToastOptions];
  base: ToastOptions;
}

export interface IStateType {
  from: { pathname: string };
}
