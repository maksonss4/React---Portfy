import React, { ReactNode } from "react";
import {Container} from "./index"

interface IButton {
  children: ReactNode
  color: string
  width: string
  height: string
}
export const Button = ({children, width, height, color}:IButton) => {
  return(
    <Container width={width} height={height} color={color}>
      {children}
    </Container>
  )
}