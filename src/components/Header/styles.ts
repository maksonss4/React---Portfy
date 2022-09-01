import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--gradient);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  min-height: 65px;
  max-height: 81px;
  .HeaderContent {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
  .userLogoMobile {
    width: 48px;
    height: 50px;
    border-radius: 50%;
  }
  .HeaderPortfyLogo {
    font-family: "Goldman";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;

    color: #005c57;
  }

  .HeaderChatButton {
    color: white;
    width: 54px;
    height: 32px;
    display: none;
  }
  .HeaderHomeButton {
    color: white;
    width: 54px;
    height: 38px;
    display: none;
  }
  .HeaderButtons {
    border: none;
    background-color: transparent;
  }
  .SearchInputContainer {
    width: 414px;
    height: 46px;
    display: none;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    justify-content: space-between;
  }
  .SearchInput {
    border: none;
    background-color: transparent;
  }
  .SearchButton {
    width: 30px;
    height: 30px;
  }
  .HeaderUserConfigs {
    display: none;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }
  .HeaderUserName {
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: white;
  }
  .userLogoDesktop {
    width: 48px;
    height: 50px;
    border-radius: 50%;
  }
  @media (min-width: 1000px) {
    .HeaderContent {
      gap: 0px;
    }
    .userLogoMobile {
      display: none;
    }
    .HeaderHomeButton {
      display: inline;
    }
    .HeaderChatButton {
      display: inline;
    }
    .SearchInputContainer {
      display: flex;
      margin-left: -120px;
    }
    .HeaderButtons {
      display: flex;
      align-items: center;
    }
    .HeaderUserConfigs {
      display: flex;
      gap: 5px;
    }
    .HeaderPortfyLogo {
      margin-left: -30%;
      margin-right: 1%;
    }
    .userLogoDesktop {
      margin-left: 5px;
    }
  }
`;
