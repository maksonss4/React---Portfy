import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Form from "../../../components/Formulary/styles";
import CustomInput from "../../../components/Input";
import { roleOptions } from "../../../components/Input/options";
import { AuthContext } from "../../../contexts/AuthContext";
import { NotificationContext } from "../../../contexts/NotificationContext";
import { ICoreResponse } from "../../../interfaces/contexts";
import { IRegisterRequest } from "../../../interfaces/pages";
import api from "../../../services/api";
import { registerSchema } from "../../../validations/register";
import { toast } from "react-toastify";

const Register = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterRequest>({
    resolver: yupResolver(registerSchema),
  });

  const { cep, setUser } = useContext(AuthContext);
  const { updateToast, base } = useContext(NotificationContext);
  //  prettier-ignore
  const registerApply: SubmitHandler<IRegisterRequest> = async ({ username, name, cpf, email, password, role }) => {
    const load = toast.loading("Solicitação em andamento...", {...base, position: "top-center"})
    if (cep || "") {
      const options = {
        username: username,
        email: email,
        password: password,
        name: name,
        cpf: cpf,
        address: cep,
        role: role,
        following: [],
        avatar_url: null,
        background_img: null
      };
  
      try {
        const { data } = await api.post<ICoreResponse>("/signup", options);
        setUser(data.user);
        updateToast(load, "Usuário cadastrado", "top-center", "success");
      } catch (error) {
        updateToast(load, "Email atualmente em uso", "top-center", "error");
      }
    } else {
      updateToast(load, "Insira seu CEP", "top-center", "error");
    }
  };

  return (
    <Form onSubmit={handleSubmit(registerApply)}>
      <h3>Cadastro</h3>
      <CustomInput
        id="username"
        label="Nome de usuário"
        type="text"
        placeholder="Insira um nome de usuário"
        register={register}
        error={errors?.username?.message}
      />
      <CustomInput
        id="name"
        label="Nome"
        type="text"
        placeholder="Nome completo"
        register={register}
        error={errors?.name?.message}
      />
      <CustomInput
        id="cpf"
        label="CPF"
        type="text"
        placeholder="11 dígitos do CPF"
        register={register}
        error={errors?.cpf?.message}
      />
      <CustomInput
        id="email"
        label="Email"
        type="email"
        placeholder="Insira seu email"
        register={register}
        error={errors?.email?.message}
      />
      <CustomInput
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        register={register}
        error={errors?.password?.message}
      />
      <CustomInput
        id="password_confirm"
        label="Confirmação de senha"
        type="password"
        placeholder="Insira novamente a senha"
        register={register}
        error={errors?.password_confirm?.message}
      />
      <CustomInput
        cep
        id="adress"
        label="CEP"
        type="text"
        placeholder="Digite seu CEP"
        register={register}
        error={errors?.adress?.message}
      />
      <CustomInput
        select
        id="role"
        label="Perfil"
        type="text"
        register={register}
        options={roleOptions}
      />
      <Button
        buttonStyle="primary"
        bg="var(--ligth-blue)"
        color="var(--white)"
        disColor="var(--disabled-blue)"
        hover="var(--medium-blue)"
        type="submit"
      >
        Cadastrar
      </Button>
    </Form>
  );
};

export default Register;
