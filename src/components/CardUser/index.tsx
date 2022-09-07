import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";

// prettier-ignore
const CardUser = ( {iconMore, iconPaper, iconPencil, buttonIcon}:ICardUserProps) => {
  const { condicionModal, setCondicionlModal} = useContext(SwitchContext);
  return (
    <ContainerCardUser>
      <figure className="cover-photo" />

      <div className="user-description">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw6SZzgtXqkNPOQH7p0nQxCPiTGOUnEpLmg&usqp=CAU"
          alt="Foto do perfil do usuário"
        />
        <div className="description-icon">
          <div className="userName">
            <h3>User name</h3>
            <p>UI | UX Design</p>
          </div>
          <div className="icon">
            <ButtonIcon display={buttonIcon} onClick={()=>setCondicionlModal(!condicionModal)}>
              {iconPencil}
            </ButtonIcon>
            <ButtonIcon display={buttonIcon} onClick={()=> setCondicionlModal(!condicionModal)}>
              {iconMore}
            </ButtonIcon>
            <ButtonIcon display={buttonIcon}>
              {iconPaper}
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className="followers-following">
        <div className="followers-following-children">
          <p>11</p>
          <span>Seguidores</span>
        </div>
        <div className="followers-following-children">
          <p>11</p>
          <span>Seguindo</span>
        </div>
      </div>
    </ContainerCardUser>
  );
};

export default CardUser;
