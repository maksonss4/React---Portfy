import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Formato de email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
