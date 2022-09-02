import styled from "styled-components";

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
    top: 90px;
    display: flex;
    align-items: center;
    gap: 35px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
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
`;
