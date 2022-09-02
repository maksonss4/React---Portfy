import { useContext, useState } from "react";
import Button from "../../components/Button";
import PhoneContainer from "../../components/PhoneContainer";
import { SwitchContext } from "../../contexts/SwitchContext";
import { CircleBG, LandingPageBackground, ParagraphText } from "./styles";

const LandingPage = () => {
  const [textAnimation, setTextAnimation] = useState("");
  const [text, setText] = useState(
    "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva."
  );

  const { switcher, setSwitcher } = useContext(SwitchContext);

  const textFade = (str: string, btn: string) => {
    btn === "login"
      ? setSwitcher({ login: true, register: false })
      : btn === "register"
      ? setSwitcher({ login: false, register: true })
      : setSwitcher({ login: false, register: false });

    setTextAnimation("fade-out 1 250ms linear");
    setTimeout(() => {
      setTextAnimation("fade-in 1 250ms linear");
      setText(str);
    }, 240);
  };

  return (
    <LandingPageBackground>
      <CircleBG />
      <div className="allContent">
        <div className="containerTopContent">
          <div className="portfyContents">
            <img className="logoPortfy" src="logoPortfy.png" alt="" />
            <h1 className="portfyName">Portfy</h1>
          </div>
          <ParagraphText
            className="containerTopContentText"
            aFade={textAnimation}
          >
            {text}
          </ParagraphText>
        </div>

        <div className="containerBottonContent">
          {Object.values(switcher).some((idx) => idx) ? (
            <Button
              id="back"
              hover="var(--whitesmoke-2)"
              className="landingPageButton"
              onClick={() =>
                textFade(
                  "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva.",
                  "landing"
                )
              }
            >
              Voltar
            </Button>
          ) : (
            <>
              <Button
                id="login"
                hover="var(--whitesmoke-2)"
                className="landingPageButton"
                onClick={() =>
                  textFade(
                    "Bem vindo de volta! Preencha os dados para realizar o login.",
                    "login"
                  )
                }
              >
                Fazer o login
              </Button>
              <Button
                id="register"
                hover="var(--whitesmoke-2)"
                className="landingPageButton"
                onClick={() =>
                  textFade(
                    "Antes de começar precisamos te conhecer melhor. Preencha o seu cadastro.",
                    "register"
                  )
                }
              >
                Registre-se grátis
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="landingPagePhones">
        <PhoneContainer />
      </div>
    </LandingPageBackground>
  );
};

export default LandingPage;
