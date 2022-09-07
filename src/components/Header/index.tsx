import { HeaderContainer } from "./styles";
import { BsChatRightText } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IHeader } from "../../interfaces/components";

export const Header = ({ src, h2 }: IHeader) => {
  return (
    <HeaderContainer>
      <div className="HeaderContent">
        {src ? (
          <img className="userLogoMobile" src={src} alt="" />
        ) : (
          <img
            className="userLogoMobile"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        )}

        <h2 className="HeaderPortfyLogo">Portfy</h2>
        <button className="HeaderButtons">
          <AiOutlineHome
            size={25}
            color="var(--white)"
            className="HeaderHomeButton"
          />
        </button>
        <button className="HeaderButtons">
          <BsChatRightText
            size={25}
            color="var(--white)"
            className="HeaderChatButton"
          />
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
            size={25}
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
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        )}
        {h2 ? (
          <h2 className="HeaderUserName">{h2}</h2>
        ) : (
          <h2 className="HeaderUserName">Francisco Stenico</h2>
        )}
      </div>
    </HeaderContainer>
  );
};
