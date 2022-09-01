import styled from "styled-components";

export const PhoneBox = styled.div`
  width: 55rem;
  max-width: 65vw;
  height: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: black;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  transform: rotate(20deg);
`;
