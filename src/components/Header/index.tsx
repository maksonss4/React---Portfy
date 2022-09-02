import { HeaderContainer } from "./styles";
import { VscHome } from "react-icons/vsc";
import { BsChatRightText } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4Vvlzhz_mY0fDFrSllG43WpRRoi6JUKNZg&usqp=CAU"
            alt=""
          />
        )}

        <h2 className="HeaderPortfyLogo">Portfy</h2>
        <button className="HeaderButtons">
          <VscHome className="HeaderHomeButton" />
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
          <GiMagnifyingGlass className="SearchButton" />
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
    </HeaderContainer>
  );
};
