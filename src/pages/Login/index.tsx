import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/login";
import { ILoginRequest } from "../../interfaces/pages";
import Form from "../../components/Formulary/styles";
import CustomInput from "../../components/Input";
import Button2 from "../../components/Button";

const Login = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const loginApply: SubmitHandler<ILoginRequest> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(loginApply)}>
        <legend>Login</legend>
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
        <Button2
          // onClick={handler}
          buttonStyle="primary"
          bg="var(--ligth-blue)"
          color="var(--white)"
          hover="var(--ligth-blue)"
          disColor="var(--disabled-blue)"
          type="submit"
        >
          Login
        </Button2>
        <p>
          Ainda não é membro?
          <a href="#">Cadastre-se aqui</a>
        </p>
        <p>Ou faça seu login via</p>
      </Form>
    </>
  );
};
export default Login;
