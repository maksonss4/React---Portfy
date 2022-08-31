import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../Button/Button";
import { FormSTLD } from "../../Form/Form";

export interface ILoginProps {
  email: string;
  password: string;
}
const LoginForm = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório* "),
    password: yup
      .string()
      .required("Senha obrigatória*")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({ resolver: yupResolver(formSchema) });

  const loginFunction = () => {};

  return (
    <FormSTLD onSubmit={handleSubmit(loginFunction)}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <label htmlFor="password">Senha</label>

      <input
        id="password"
        type="password"
        placeholder="Crie uma senha"
        {...register("password")}
      />
      <Button type="submit">Login</Button>
    </FormSTLD>
  );
};
export default LoginForm;
