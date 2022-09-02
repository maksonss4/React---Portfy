import styled from "styled-components";
import { IButtonIconProp } from "../../interfaces/styles";

export const ContainerCardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 310px;
  border-radius: 10px;
  box-shadow: var(--boxshadow);

  .cover-photo {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .user-description {
    position: absolute;
    width: 100%;
    top: 90px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    figure {
      width: 50%;
    }
    img {
      width: 80%;
      height: 100%;
      border-radius: 50%;
      margin-left: 20px;
    }
    .description-icon {
      display: flex;
      gap: 5px;
    }
    .icon {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 25px;
      gap: 5px;
    }
    .userName {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 8px;
    }
  }

  .followers-following {
    display: flex;
    gap: 45px;
    padding: 10px;
  }

  .followers-following-children {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0 40px 0;

    p {
      font-weight: 600;
      font-size: 32px;
    }

    span {
      font-size: 16px;
      color: var(--medium-grey);
    }
  }
  @media (min-width: 1000px) {
    max-width: 700px;
    max-height: 500px;
    display: block;
    .cover-photo {
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 150px;
  }
  .user-description{
    width: 100%;
    justify-content: flex-start;
    top: 40px;
    figure {
      width: 40%;
    }
    img {
      width: 80%;
      height: 100%;
    }
    .userName {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 80px;
      width: 350px;
    }
    .icon {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 80px;
    }
    .description-icon {
      display: flex;
      flex-direction: row;
      gap: 40px;
      margin-top: 40px;
    }
  }
  } 
`

export const ButtonIcon = styled.button<IButtonIconProp>`
display: ${({display})=> display};
border: none;
background: none;
`
