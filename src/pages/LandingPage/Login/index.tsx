import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/login";
import { ILoginRequest } from "../../../interfaces/pages";
import Form from "../../../components/Formulary/styles";
import CustomInput from "../../../components/Input";
import Button from "../../../components/Button";
import { AiFillGithub } from "react-icons/ai";

const Login = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const loginApply: SubmitHandler<ILoginRequest> = async (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(loginApply)}>
      <h3>Login</h3>
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
        placeholder="Insira sua senha"
        register={register}
        error={errors?.password?.message}
      />
      <Button
        buttonStyle="primary"
        bg="var(--ligth-blue)"
        color="var(--white)"
        disColor="var(--disabled-blue)"
        hover="var(--medium-blue)"
        type="submit"
      >
        Login
      </Button>
      <div>
        <h5>Acesse o repositório de nossa atividade:</h5>
        <a
          href="https://github.com/Projeto-final-de-React/Projet-final-de-React---Portfy"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub size={55} className="gitHub-icon" />
        </a>
      </div>
    </Form>
  );
};
export default Login;
