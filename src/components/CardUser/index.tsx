import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import api from "../../services/api";

const TechAPI = () => {
  const TechSearch = () => {
    const token = localStorage.getItem("@portfy(token)");
    try {
      const getTech = api.get("/tech/1");
      console.log(getTech);
      // prettier-ignore
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      //  "@portfy(token)"
    } catch (error) {
      console.error(error);
    }
  };
};

const CardUser = ({
  iconMore,
  iconPaper,
  iconPencil,
  buttonIcon,
}: ICardUserProps) => {
  const { condicionModal, setCondicionlModal } = useContext(SwitchContext);
  const [techs, setTechs] = useState<any>([]);
  api
    .get("/techs")
    .then((response) => setTechs(response.data))
    .catch((err) => console.log(err));

  api
    .post("/techs", { name: "Tech", status: "finalizada", userId: "1" })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log(techs);
  return (
    <ContainerCardUser>
      <figure>
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
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw6SZzgtXqkNPOQH7p0nQxCPiTGOUnEpLmg&usqp=CAU"
            alt="Foto do perfil do usuário"
          />
        </figure>
        <div className="description-icon">
          <div className="userName">
            <h2>User name</h2>
            {techs.map((elem: any) => {
              <h1>{elem.name}</h1>;
            })}
          </div>
          <div className="icon">
            <ButtonIcon
              display={buttonIcon}
              onClick={() => setCondicionlModal(!condicionModal)}
            >
              {iconPencil}
            </ButtonIcon>
            <ButtonIcon
              display={buttonIcon}
              onClick={() => setCondicionlModal(!condicionModal)}
            >
              {iconMore}
            </ButtonIcon>
            <ButtonIcon display={buttonIcon}>{iconPaper}</ButtonIcon>
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
