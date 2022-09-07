import { ICardUserProps, ITechData } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext, useEffect, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";


// prettier-ignore
const CardUser = ({ iconMore, iconPaper, iconPencil, buttonIcon }: ICardUserProps) => {
  const [techs, setTechs] = useState<ITechData[]>([]);
  const [totalSeguidores, setTotalSeguidores] = useState(0)
  
  const { user, users} = useContext(AuthContext);
  const { setAddTechs, setUpdateUser, addTechs, updateUser } =
    useContext(SwitchContext);

  const techsUser = techs.filter((elemen)=>{
    return elemen.userId === user.id
  });
  
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
      <figure className="cover-photo">
        <>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQHRw_NPXrneWg/company-background_10000/0/1552918569507?e=2159024400&v=beta&t=OmbTm6RZ9TGYGKfPSOrTE0DKoAbdukyzk8jKHdkZY30"
            alt="Capa do perfil do usuário"
            className="cover-photo"
          />
          <ButtonIcon display={buttonIcon}>{iconPencil}</ButtonIcon>
        </>
      </figure>

      <div className="user-description">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw6SZzgtXqkNPOQH7p0nQxCPiTGOUnEpLmg&usqp=CAU"
          alt="Foto do perfil do usuário"
        />
        <div className="description-icon">
          <div className="userName">
            <h2>{user.username}</h2>
            
            <p>{techsUser.map((tech)=>tech.name).join(" | ")}</p>
          
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
