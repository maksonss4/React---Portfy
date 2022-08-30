import Button from "../../components/Button/index"
import { Input } from "../../components/Input";
import { Container, DivForm, DivInformations, DivLogo, DivPai } from "./styles";

export const Resgister = () => {
  return (
    <Container>
      <DivPai>
        <DivLogo>
          <img src="logo.png" alt="logo portfy" />
          <h1>Portfy</h1>
        </DivLogo>
        <DivInformations>
          <h2>Páigina de cadastro</h2>
          <p>
            Com apenas alguns simples passos conecte-se à rede social de
            empregabilidade que mais cresce do mercado.
          </p>
        </DivInformations>
        <Button children="Voltar" color="Black" width="9" height="2.68" background="white"/>
      </DivPai>
      <DivForm>
        <div className="divBigode"/>
        <h2>
          Cadastro
        </h2>
        <form>
          <label htmlFor="username">Nome de Usuário</label>
          <Input type="text" placeholder="Coloque seu nome de usuário" name="username" id="username"/>
          <label htmlFor="name">Nome completo</label>
          <Input type="text" placeholder="Coloque seu nome completo" name="name" id="name"/>
          <label htmlFor="cpf">CPF</label>
          <Input type="number" placeholder="Coloque seu CPF" name="cpf" id="cpf"/>
          <label htmlFor="address">Endereço de residência</label>
          <Input type="text" placeholder="Coloque seu Endereço" name="address" id="address"/>
          <label htmlFor="email">Email</label>
          <Input type="email" placeholder="Coloque seu Email" name="email" id="email"/>
          <label htmlFor="password">Senha</label>
          <Input type="password" placeholder="Coloque sua senha" name="password" id="password"/>
          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <Input type="password" placeholder="Confirme sua senha" name="confirmPassword" id="confirmPassword"/>
          <label htmlFor="typeUser">Tipo do Usuário</label>
          <select name="typeUser" id="typeUser">
            <option value="developer">Desenvolvedor</option>
            <option value="recruiter">Recrutador</option>
          </select>
          <Button type="submit" children="Cadastrar" color="white" width="21.3" height="3.62" background="#029CCC"/>
        </form>
      </DivForm>
    </Container>
  );
};
