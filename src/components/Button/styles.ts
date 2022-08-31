import styled from "styled-components";
export interface IButtonProps {
  color: string
  width: string
  height: string
  background: string
}
export const Container = styled.button<IButtonProps>`
  background: ${({background})=>background};
  border-radius: 8px;
  border: none;
  color: ${({color})=> color};
  width: ${({width})=> `${width}rem`};
  height: ${({height})=> `${height}rem`};
`