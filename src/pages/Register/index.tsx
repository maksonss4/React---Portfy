export const Resgister = () => {
  return (
    <>
      <div className="divPai">
        <div className="divLogo">
          <img src="" alt="logo portfy" />
          <h1>Portfy</h1>
        </div>
        <div className="divInfomations">
          <h2>Páigina de cadastro</h2>
          <p>
            Com apenas alguns simples passos conecte-se à rede social de
            empregabilidade que mais cresce do mercado
          </p>
        </div>
        <button>voltar</button>
      </div>
      <div className="divForm">
        <h2>
          Cadastro
        </h2>
        <form>
          <label htmlFor="username">Nome de Usuário</label>
          <input type="text" name="username" id="username" placeholder="Coloque seu nome de usuário" />
          <label htmlFor="name">Nome completo</label>
          <input type="text" name="name" id="name" placeholder="Coloque seu nome completo" />
          <label htmlFor="cpf">CPF</label>
          <input type="number" name="cpf" id="cpf" placeholder="Coloque seu CPF" />
          <label htmlFor="address">Endereço de residência</label>
          <input type="text" name="address" id="address" placeholder="Coloque seu Endereço" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Coloque seu Email"/>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="Coloque sua senha" />
          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};
