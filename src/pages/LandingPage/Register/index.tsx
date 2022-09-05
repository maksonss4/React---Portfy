import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Form from "../../../components/Formulary/styles";
import CustomInput from "../../../components/Input";
import { roleOptions } from "../../../components/Input/options";
import { IRegisterRequest } from "../../../interfaces/pages";
import { registerSchema } from "../../../validations/register";

const Register = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterRequest>({
    resolver: yupResolver(registerSchema),
  });

  const registerApply: SubmitHandler<IRegisterRequest> = async (data) => {
    console.log(data);
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
        cep
        id="adress"
        label="CEP"
        type="text"
        placeholder="Digite seu CEP"
        register={register}
        error={errors?.adress?.message}
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
