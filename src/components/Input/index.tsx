import { Container } from "./styles"

interface IInput extends React.HTMLProps<HTMLImageElement>{
  type: string
  placeholder: string
}

export const Input = ({type, placeholder}:IInput) => {
  return(
    <Container type={type} placeholder={placeholder}  />
  )
}