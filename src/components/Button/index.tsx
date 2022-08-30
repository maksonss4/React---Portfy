import React, { ReactNode } from "react";
import {Container} from "./styles"

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  width: string;
  height: string;
  background: string
}
const Button = ({children, width, height, color, background}:IButton) => {
  return(
    <Container width={width} height={height} color={color} background={background}>
      {children}
    </Container>
  )
}
export default Button