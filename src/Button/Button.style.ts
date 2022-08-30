import styled from "styled-components";
export interface IButtonSTLD {
  backgroundColor: string;
  fontColor: string;

  btWidth: string;
  btHeight: string;

  btMargin: string;
  btPadding: string;

  borderRadius: string;
}
export const ButtonSTLD = styled.button<IButtonSTLD>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  width: ${({ btWidth }) => btWidth}px;
  height: ${({ btHeight }) => btHeight}px;

  margin: ${({ btMargin }) => btMargin};
  padding: ${({ btPadding }) => btPadding};
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;
