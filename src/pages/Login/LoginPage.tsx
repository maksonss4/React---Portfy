import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import {
  FormSTLD,
  Container,
  PageDivision,
  LogoContainer,
  SubDivision,
} from "./styles";

export interface ILoginProps {
  email: string;
  password: string;
}
const Login = () => {
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
    <Container>
      <PageDivision>
        <SubDivision>
          <LogoContainer>
            <img src="logo.png" alt="logo portfy" />
            <h1>Página de Login</h1>
            <p>
              Com apenas alguns simples passos conecte-se à rede social de
              empregabilidade que mais cresce no mercado
            </p>
          </LogoContainer>

          <Button
            btHeight="20px"
            btWidth="60px"
            backgroundColor="#fff"
            borderRadius="4px"
            borderColor="#fff"
            btMargin=" 0 0 20px"
          >
            Voltar
          </Button>
        </SubDivision>
      </PageDivision>
      <PageDivision>
        <FormSTLD onSubmit={handleSubmit(loginFunction)}>
          <fieldset>
            <legend>Login</legend>
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
            <Button
              type="submit"
              btHeight="50px"
              btWidth="100%"
              backgroundColor="#029CCC"
              borderColor="#029CCC"
            >
              Login
            </Button>
          </fieldset>
          <p>
            Ainda não é membro?
            {/* <Link to="#" replace>
              Cadastre-se aqui </Link>*/}
            <a href="#">Cadastre-se aqui</a>
          </p>
          <p>Ou faça seu login via</p>
        </FormSTLD>
      </PageDivision>
    </Container>
  );
};
export default Login;
