import PhoneContainer from "../../components/PhoneContainer";
import { CircleBG, LandingPageBackground } from "./styles";
export const LandingPage = () => {
  return (
    <LandingPageBackground>
      <CircleBG />
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
      <div className="landingPagePhones">
        <PhoneContainer />
      </div>
    </LandingPageBackground>
  );
};
