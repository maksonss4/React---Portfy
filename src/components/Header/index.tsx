import { HeaderContainer } from "./styles";
import { VscHome } from "react-icons/vsc";
import { BsChatRightText } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="HeaderContent">
        <img
          className="userLogoMobile"
          src="https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/07/legiao_jPb4LnIY_ZgvzWA2eFyGORNJHxaVX7S3hDp5B986dr.png.webp"
          alt=""
        />
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
          <AiOutlineSearch
            color="var(--medium-grey)"
            className="SearchButton"
          />
        </button>
      </div>
      <div className="HeaderUserConfigs">
        <img
          className="userLogoDesktop"
          src="https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/07/legiao_jPb4LnIY_ZgvzWA2eFyGORNJHxaVX7S3hDp5B986dr.png.webp"
          alt=""
        />
        <h2 className="HeaderUserName">UserName</h2>
      </div>
    </HeaderContainer>
  );
};
