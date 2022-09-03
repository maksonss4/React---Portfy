import styled from "styled-components";
import { IAnimationContent } from "../../interfaces/pages";

export const LandingPageBackground = styled.div`
  background: var(--gradient);
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-right: 10rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .allContent {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }

  .containerTopContent {
    width: 100%;
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }

  .portfyName {
    font-family: "Goldman";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
    color: var(--green-black);
  }

  .logoPortfy {
    width: 50%;
    height: 100%;
    max-width: 167px;
    max-height: 158px;
  }

  .portfyContents {
    width: 100%;
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .containerBottonContent {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 70px;
  }

  .landingPageButton {
    height: 43px;
    width: 58%;
    max-width: 225px;
    border-radius: 6px;
    border: none;
    margin-top: 6px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  .landingPagePhones {
    display: none;
  }

  @media (min-width: 1024px) {
    .containerTopContentText {
      display: inline;

    }
    .allContent {
      width: 600px;
    }
    .containerTopContent {
      align-items: flex-start;
      width: 600px;
      margin-left: 111px;
      margin-top: 38px;
    }
    .logoPortfy {
      width: 85px;
      height: 78px;
    }
    .portfyContents {
      width: 15%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 0;
      margin-bottom: 13px;
    }
    .containerBottonContent {
      margin-left: -75px;
    }

    .landingPagePhones {
      display: flex;
      width: 70rem;
      max-width: 100vw;
      height: 100vh;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;

      position: fixed;
      right: 0;
    }
  }
`;

export const ParagraphText = styled.p`
  display: none;
  width: 395px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: var(--green-black);
  animation: ${({ aType }: IAnimationContent) => aType};

  @keyframes fade-in {
    from {opacity: 0}
    to {opacity: 1}
  }
  
  @keyframes fade-out {
    from {opacity: 1}
    to {opacity: 0}
  }
`;

export const CircleBG = styled.div`
  top: -5rem;
  left: -5rem;

  width: 100vw;
  height: 100vw;
  border-width: 0 2rem 0 2rem;
  position: fixed;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--medium-green);
  animation: spin infinite 20s linear;

  @media (min-width: 1024px) {
    top: -15rem;
    left: -10rem;

    width: 50rem;
    height: 50rem;
  }

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
  }
`;

export const FormScreen = styled.div`
  width: 24rem;
  height: 40rem;
  max-width: 57vh;
  max-height: 95vh;
  background-color: var(--whitesmoke);
  z-index: 1;
  border: 1rem solid var(--white);
  border-radius: 1rem;
  position: relative;
  display: ${({display}) => display};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  animation: ${({aType}: IAnimationContent) => `${aType} 1 800ms linear`};

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--ligth-grey);
    border-radius: 20px;
  }

  .smartphone__detail {
    position: absolute;
    top: 0;
    width: 50%;
    height: 1.3rem;
    background-color: white;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  button {
    margin: 1.2rem 0;
  }

  h5 {
    font-weight: 500;
    color: var(--dark-grey);
    line-height: 1.2rem;
    font-size: 1rem;
    margin-top: 10%;
  }

  a {
    align-self: center;
    color: var(--black);
    transition: ease 400ms;
    cursor: pointer;

    &:hover {
      color: var(--medium-blue);
    }
  }

  @keyframes slide-in {
    0% {transform: translateX(50rem)}
    85% {transform: translateX(0rem)}
    90% {transform: translateX(-1rem)}
    100% {transform: translateX(0rem)}
  }
  
  @keyframes slide-out {
    0% {transform: translateX(0rem)}
    10% {transform: translateX(-1rem)}
    15% {transform: translateX(0rem)}
    100% {transform: translateX(50rem)}
  }
`;
