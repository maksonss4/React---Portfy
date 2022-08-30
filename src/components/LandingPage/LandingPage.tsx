import { LandingPageBackground } from "./styles";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <LandingPageBackground>
      <div className="allContent">
        <div className="containerTopContent">
          <div className="portfyContents">
            <img className="logoPortfy" src="logoPortfy.png" alt="" />
            <h1 className="portfyName">Portfy</h1>
          </div>
          <p className="containerTopContentText">
            Compartilhe, crie e busque portfólios profissionais de maneira
            simples e intuitiva
          </p>
        </div>

        <div className="containerBottonContent">
          <button className="landingPageButton">Entrar com minha conta</button>
          <button className="landingPageButton">Entrar com Google</button>
          <a href="#">Registrar-se grátis</a>
        </div>
      </div>
      <div></div>
    </LandingPageBackground>
  );
};
