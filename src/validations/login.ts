import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "A senha contém no mínimo 6 caracteres")
    .required("Senha obrigatória"),
});
