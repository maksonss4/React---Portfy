import { HeaderContainer } from "./styles";
import { BsChatRightText } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDynamicFeed } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { IHeader } from "../../interfaces/components";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "../CardUser/style";

export const Header = ({ src, h2, location }: IHeader) => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

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
          { location === "feed" ? (
            <ButtonIcon className="HeaderButtons"
              onClick={() => navigate("/feed")}
            >
              <VscHome
                size={30}
                color="var(--white)"
                className="HeaderHomeButton"
              />
            </ButtonIcon>
          ) : (
            <ButtonIcon className="HeaderButtons" onClick={() => navigate("/dashboard", { replace: true })}>
              <MdDynamicFeed className="HeaderHomeButton" />
            </ButtonIcon>
          )}
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
      <Button buttonStyle="primary" onClick={logout}>
        Logout
      </Button>
    </HeaderContainer>
  );
};
