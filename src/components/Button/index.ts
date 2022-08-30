import styled from "styled-components";
export interface IButtonProps {
  color: string
  width: string
  height: string
}
export const Container = styled.button<IButtonProps>`
  color: ${({color})=> color};
  width: ${({width})=> `${width}rem`};
  height: ${({height})=> `${height}rem`};
`