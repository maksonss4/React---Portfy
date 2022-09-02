import styled from "styled-components";
import { IButtonIconProp } from "../../interfaces/styles";

export const ContainerCardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 310px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);

  .cover-photo {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .user-description {
    position: absolute;
    width: 300px;
    top: 90px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-left: 40px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
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
    width: 80%;
    height: 80%;
    top: 50px;
    img {
      width: 200px;
      height: 200px;
    }
    .username {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .icon {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-left: 20;
    }
    .description-icon {
      position: absolute;
      right: -120px;
      top:40px;
      display: flex;
      flex-direction: row;
      gap: 300px;
    }
  }
  } 
`

export const ButtonIcon = styled.button<IButtonIconProp>`
display: ${({display})=> display};
border: none;
background: none;
`
