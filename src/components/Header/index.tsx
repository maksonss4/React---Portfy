import { HeaderContainer } from "./styles";
import { VscHome } from "react-icons/vsc";
import { BsChatRightText } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDynamicFeed } from "react-icons/md";
import { IHeader } from "../../interfaces/components";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = ({ src, h2, location }: IHeader) => {
  const { logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <div className="HeaderContent">
        {src ? (
          <img className="userLogoMobile" src={src} alt="" />
        ) : (
          <img
            className="userLogoMobile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4Vvlzhz_mY0fDFrSllG43WpRRoi6JUKNZg&usqp=CAU"
            alt=""
          />
        )}

        <h2 className="HeaderPortfyLogo">Portfy</h2>
        <button className="HeaderButtons">
          {location === "feed" ? (
            <VscHome className="HeaderHomeButton" />
          ) : (
            <MdDynamicFeed className="HeaderHomeButton" />
          )}
        </button>
        <button className="HeaderButtons">
          <BsChatRightText className="HeaderChatButton" />
        </button>
      </div>
      <div className="SearchInputContainer">
        <input
          className="SearchInput"
          type="text"
          placeholder="Digite sua pesquisa aqui"
        />
        <button className="HeaderButtons">
          <AiOutlineSearch
            color="var(--medium-grey)"
            className="SearchButton"
          />
        </button>
      </div>
      <div className="HeaderUserConfigs">
        {src ? (
          <img className="userLogoDesktop" src={src} alt="" />
        ) : (
          <img
            className="userLogoDesktop"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4Vvlzhz_mY0fDFrSllG43WpRRoi6JUKNZg&usqp=CAU"
            alt=""
          />
        )}
        {h2 ? (
          <h2 className="HeaderUserName">{h2}</h2>
        ) : (
          <h2 className="HeaderUserName">Você não está logado</h2>
        )}
      </div>
      <Button buttonStyle="primary" onClick={logout}>
        Logout
      </Button>
    </HeaderContainer>
  );
};
