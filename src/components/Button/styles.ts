import styled from "styled-components";
import { IStyledButton } from "../../interfaces/styles";

export const PrimaryButton = styled.button`
  height: 3rem;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: ${({bg}: IStyledButton) => bg};
  color: ${({color}: IStyledButton) => color};
  font-weight: 500;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({bg}: IStyledButton) => bg};
  }

  &:disabled {
    background-color: ${({disColor}: IStyledButton) => disColor};
    cursor: unset;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  background-color: ${({bg}: IStyledButton) => bg};
  font-weight: 500;
  color: ${({color}: IStyledButton) => color};
  padding: 0.6rem 1rem;
  border-radius: 4px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({hover}: IStyledButton) => hover};
  }
`;
