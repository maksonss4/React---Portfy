import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";

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
const CardUser = ({
  iconMore,
  iconPaper,
  iconPencil,
  buttonIcon,
}: ICardUserProps) => {
  const { setAddTechs, setUpdateUser, addTechs, updateUser } =
    useContext(SwitchContext);

  const { user } = useContext(AuthContext);
  const [techs, setTechs] = useState<any>([]);
  const showAllTechs = () => {
    api
      .get("/techs")
      .then((response) => setTechs(response.data))
      .catch((err) => console.log(err));
    console.log(techs);
  };
  const doAPost = () => {
    api
      .post("/techs", {
        name: "banana de pijama",
        status: "finalizada",
        userId: "1",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const deletePost = (id: number) => {
    api
      .delete("/techs/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ContainerCardUser>
      <figure>
        <>
          <button onClick={showAllTechs}>Pegar posts</button>
          <button onClick={doAPost}>Fazer post</button>

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
            <h2>{user.username}</h2>
            {techs.map((elem: any) => {
              return <button>{elem.name}</button>;
            })}
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
