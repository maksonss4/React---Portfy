import { SubmitHandler, useForm } from "react-hook-form";
import Button2 from "../../../components/Button";
import Form from "../../../components/Formulary/styles";
import CustomInput from "../../../components/Input";
import { roleOptions } from "../../../components/Input/options";
import { IRegisterRequest } from "../../../interfaces/pages";

const Register = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterRequest>({});

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
        id="adress"
        label="Endereço"
        type="text"
        placeholder="Endereço de sua residência ou empresa"
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
        label="CPF"
        type="text"
        placeholder="11 dígitos do CPF"
        register={register}
        options={roleOptions}
      />
      <Button2
        buttonStyle="primary"
        bg="var(--ligth-blue)"
        color="var(--white)"
        hover="var(--medium-blue)"
      >
        Cadastrar
      </Button2>
    </Form>
  );
};

export default Register;