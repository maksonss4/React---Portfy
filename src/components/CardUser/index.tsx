import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext, useEffect, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";

// prettier-ignore
const CardUser = ({ iconMore, iconPaper, iconPencil, buttonIcon }: ICardUserProps) => {
  // const { condicionModal, setCondicionlModal } = useContext(SwitchContext);

  const [totalSeguidores, setTotalSeguidores] = useState(0)
  
  const { user, users} = useContext(AuthContext);

  const { setAddTechs, setUpdateUser, addTechs, updateUser } =
    useContext(SwitchContext);

  useEffect(() => {

    users.forEach(element => {
      const ehSeguidor = element.following.some(idUser => idUser === user.id)
      if(ehSeguidor){
        setTotalSeguidores(totalSeguidores + 1)
      }
    });
  }, [])
  
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
            <h3>{user.username}</h3>
            <p>UI | UX Design</p>
          </div>
          <div className="icon">
            <ButtonIcon
              display={buttonIcon}
              onClick={() => setUpdateUser(!updateUser)}
            >
              {iconPencil}
            </ButtonIcon>
            <ButtonIcon
              display={buttonIcon}
              onClick={() => setAddTechs(!addTechs)}
            >
              {iconMore}
            </ButtonIcon>
            <ButtonIcon display={buttonIcon}>{iconPaper}</ButtonIcon>
          </div>
        </div>
      </div>
      <div className="followers-following">
        <div className="followers-following-children">
          <p>{totalSeguidores}</p>
          <span>Seguidores</span>
        </div>
        <div className="followers-following-children">
          <p>{user.following.length}</p>
          <span>Seguindo</span>
        </div>
      </div>
    </ContainerCardUser>
  );
};

export default CardUser;
