import styled from "styled-components";
import React from "react";
export interface IButtonSTLD extends React.HTMLProps<HTMLButtonElement> {
  backgroundColor?: string;
  fontColor?: string;

  btWidth?: string;
  btHeight?: string;

  btMargin?: string;
  btPadding?: string;

  borderRadius?: string;
  borderColor?: string;
}
export const ButtonSTLD = styled.button<IButtonSTLD>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  width: ${({ btWidth }) => btWidth};
  height: ${({ btHeight }) => btHeight};

  margin: ${({ btMargin }) => btMargin};
  padding: ${({ btPadding }) => btPadding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: 2px solid ${({ borderColor }) => borderColor};
`;
