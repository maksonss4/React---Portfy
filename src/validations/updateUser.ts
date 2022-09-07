import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  username: yup.string().min(4, "O nome deve conter ao menos 4 caracteres"),
  avatar_url: yup.string().required("Insira a URL de imagem do seu perfil"),
});
