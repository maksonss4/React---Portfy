import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
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

    setAnimation({ ...animation, text: "fade-out 1 250ms linear" });
    setTimeout(() => {
      setAnimation({ ...animation, text: "fade-in 1 250ms linear" });
      setText(str);
    }, 240);
  };

  useEffect(() => {
    if (!Object.values(screenSwitcher).some((idx) => idx)) {
      setAnimation({
        ...animation,
        form: "slide-out",
      });
      setTimeout(() => {
        setDelay(screenSwitcher);
        setDisplay("none");
      }, 790);
    } else {
      setDelay(screenSwitcher);
      setDisplay("flex");
      setAnimation({
        ...animation,
        form: "slide-in",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

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
            animation={animation.text}
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
            </>
          )}
        </div>
      </div>
      <div className="landingPagePhones">
        <PhoneContainer />
      </div>
      <FormScreen animation={animation.form} display={display}>
        <AiOutlineClose
          className="form__exit-button"
          size={20}
          onClick={() => {
            textFade(
              "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva.",
              "landing"
            );
          }}
        />
        <span className="smartphone__detail"></span>
        {delay.register ? <Register /> : <Login />}
      </FormScreen>
    </LandingPageBackground>
  );
};

export default LandingPage;
