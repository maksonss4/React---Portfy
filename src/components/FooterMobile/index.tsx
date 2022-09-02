import { ContainerFooterMobile } from "./style";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const FooterMobile = () => {
  return (
    <ContainerFooterMobile>
      <AiFillHome size={30} />
      <AiOutlineSearch size={30} />
      <BsChatDots size={30} />
      <FaUserAlt size={30} />
    </ContainerFooterMobile>
  );
};

export default FooterMobile;
