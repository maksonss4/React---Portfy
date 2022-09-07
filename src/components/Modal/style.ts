import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--faded-black);
  backdrop-filter: blur(2px);
  margin: 0px;

  form {
    max-width: 95%;
    width: 20rem;
  }

  .divHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .divHeader {
    display: flex;

    svg {
      cursor: pointer;
    }
  }

  .doubled__buttons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;
