import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";

const CardUser = ( {iconMore, iconPaper, iconPencil, buttonIcon}:ICardUserProps) => {
  return (
    <ContainerCardUser>
      <figure>
        <>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQHRw_NPXrneWg/company-background_10000/0/1552918569507?e=2159024400&v=beta&t=OmbTm6RZ9TGYGKfPSOrTE0DKoAbdukyzk8jKHdkZY30"
            alt="Capa do perfil do usuário"
            className="cover-photo"
          />
          <ButtonIcon display={buttonIcon}>
            {iconPencil}
          </ButtonIcon>
        </>
      </figure>

      <div className="user-description">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw6SZzgtXqkNPOQH7p0nQxCPiTGOUnEpLmg&usqp=CAU"
            alt="Foto do perfil do usuário"
          />
        </figure>
        <div className="description-icon">
          <div className="username">
            <h2>User name</h2>
            <p>UI | UX Design</p>
          </div>
          <div className="icon">
            <ButtonIcon display={buttonIcon}>
              {iconPencil}
            </ButtonIcon>
            <ButtonIcon display={buttonIcon}>
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
          <span>Seguidores</span>
        </div>
      </div>
    </ContainerCardUser>
  );
};

export default CardUser;
