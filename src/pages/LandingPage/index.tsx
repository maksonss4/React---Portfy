import PhoneContainer from "../../components/PhoneContainer";
import Login from "../Login";
import Register from "../Register";
import { CircleBG, LandingPageBackground } from "./styles";

const LandingPage = () => {
  
  return (
    <LandingPageBackground>
      <CircleBG />
      <div className="allContent">
        <div className="containerTopContent">
          <div className="portfyContents">
            <img className="logoPortfy" src="logoPortfy.png" alt="" />
            <h1 className="portfyName">Portfy</h1>
          </div>
          {
            false ? (<h1>teste</h1>) : (
              <p className="containerTopContentText">
                Compartilhe, crie e busque portfólios profissionais de maneira
                simples e intuitiva
              </p>
            )
          }
        </div>

        <div className="containerBottonContent">
          <button className="landingPageButton">Entrar com minha conta</button>
          <button className="landingPageButton">Entrar com Google</button>
          <a href="#">Registrar-se grátis</a>
        </div>
      </div>
      <div className="landingPagePhones">
        <PhoneContainer>
          {/* <Login /> */}
          {/* <Register /> */}
        </PhoneContainer>
      </div>
    </LandingPageBackground>
  );
};

export default LandingPage;