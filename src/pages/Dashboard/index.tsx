import CardUser from "../../components/CardUser"
import { Header } from "../../components/Header"
import {MdAdd} from "react-icons/md"
import {HiPencil} from "react-icons/hi"
import {BsFilePdf} from "react-icons/bs"
import { CardsNews } from "../../components/CardsNews"
import { Container } from "./style"

export const Dashboard = () => {
  return(
    <>
    <Header/>
    <Container>
      <CardUser iconMore={<MdAdd/>} iconPencil={<HiPencil/>} iconPaper={<BsFilePdf/>}/>
      <CardsNews/>
    </Container>
    
    </>
  )
}