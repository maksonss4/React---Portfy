import styled from "styled-components";

export const LandingPageBackground = styled.div`
  background: var(--gradient);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .allContent {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .containerTopContent {
    width: 100%;
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .portfyName {
    font-family: "Goldman";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
    color: #005c57;
  }

  .logoPortfy {
    width: 50%;
    height: 100%;
    max-width: 167px;
    max-height: 158px;
  }

  .containerTopContentText {
    display: none;
    width: 395px;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: white;
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
    a {
      margin-top: 18px;
      text-decoration: none;
      color: black;
    }
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

  @media (min-width: 1000px) {
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
  }
`;
