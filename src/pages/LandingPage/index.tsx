import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import PhoneContainer from "../../components/PhoneContainer";
import { SwitchContext } from "../../contexts/SwitchContext";
import { ISwitcher } from "../../interfaces/pages";
import { IGeneralAnimations } from "../../interfaces/styles";
import Login from "./Login";
import Register from "./Register";
import {
  CircleBG,
  FormScreen,
  LandingPageBackground,
  ParagraphText,
} from "./styles";

const LandingPage = () => {
  const [display, setDisplay] = useState("none");
  const [animation, setAnimation] = useState<IGeneralAnimations>({
    form: "",
    text: "fade-in 1 250ms linear",
  });
  const [text, setText] = useState(
    "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva."
  );
  const { screenSwitcher, setScreenSwitcher } = useContext(SwitchContext);
  const [delay, setDelay] = useState<ISwitcher>(screenSwitcher);

  const textFade = (str: string, btn: string) => {
    btn === "login"
      ? setScreenSwitcher({ login: true, register: false })
      : btn === "register"
      ? setScreenSwitcher({ login: false, register: true })
      : setScreenSwitcher({ login: false, register: false });

    setTimeout(() => {
      setAnimation({ ...animation, text: "fade-in 1 250ms linear" });
      setText(str);
    }, 240);
  };

  useEffect(() => {
    if (!Object.values(screenSwitcher).some((idx) => idx)) {
      setAnimation({ ...animation, form: "slide-out" });
      setTimeout(() => {
        setDelay(screenSwitcher);
        setDisplay("none");
      }, 790);
    } else {
      setDelay(screenSwitcher);
      setDisplay("flex");
      setAnimation({ ...animation, form: "slide-in" });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

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
            aType={animation.text}
          >
            {text}
          </ParagraphText>
        </div>

        <div className="containerBottonContent">
          {Object.values(screenSwitcher).some((idx) => idx) ? (
            <Button
              id="back"
              hover="var(--whitesmoke-2)"
              className="landingPageButton"
              onClick={() => {
                textFade(
                  "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva.",
                  "landing"
                );
              }}
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
      <div className="lp__formulary">
        <FormScreen aType={animation.form} display={display}>
          <span className="smartphone__detail"></span>
          {delay.register ? <Register /> : <Login />}
        </FormScreen>
      </div>
    </LandingPageBackground>
  );
};

export default LandingPage;
