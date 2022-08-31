import styled from "styled-components";

export const FormSTLD = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 600px;
  height: auto;

  @media screen and (min-width: 320px) {
    width: 90px;
  }
`;
