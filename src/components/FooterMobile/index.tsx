import { ContainerFooterMobile } from "./style";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const FooterMobile = () => {
  return (
    <ContainerFooterMobile>
      <div className="container-icons">
        <AiFillHome size={30} />
        <AiOutlineSearch size={30} />
        <BsChatDots size={30} />
        <FaUserAlt size={30} />
      </div>
    </ContainerFooterMobile>
  );
};

export default FooterMobile;
