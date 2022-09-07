import CardUser from "../../components/CardUser";
import { Header } from "../../components/Header";
import { MdAdd } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { BsFilePdf } from "react-icons/bs";
import { CardsNews } from "../../components/CardsNews";
import { Container } from "./style";
import { Post } from "../../components/Post";
import { Modal } from "../../components/Modal";
import Form from "../../components/Formulary/styles";
import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const { updateUser, addTechs, setAddTechs, setUpdateUser } =
    useContext(SwitchContext);

  return (
    <>
      <Header h2={user.username} location="dashboard" />
      <Container>
        <div className="main">
          <CardUser
            iconMore={<MdAdd />}
            iconPencil={<HiPencil />}
            iconPaper={<BsFilePdf />}
          />
          <Post h2={user.username} p="alterar" src="" />
        </div>
        <section>
          <CardsNews />
        </section>
        {updateUser && (
          <Modal>
            <button type="button" onClick={() => setUpdateUser(!updateUser)}>
              X
            </button>
            <Form>
              <div className="divHeader">
                <h2>Atualizar Perfil</h2>
              </div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
              <label htmlFor="avatar">Avatar</label>
              <input type="url" name="avatar" id="avatar" />
              <div>
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => console.log("deletar")}>
                  Deletar
                </button>
              </div>
            </Form>
          </Modal>
        )}
        {addTechs && (
          <Modal>
            <Form>
              <div className="divHeader">
                <h2>Adicionar tecnologia</h2>
                <button type={"button"} onClick={() => setAddTechs(!addTechs)}>
                  X
                </button>
              </div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome da tecnologia"
              />
              <label htmlFor="password">Status</label>
              <select name="" id="">
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
              <button type="submit">Salvar</button>
            </Form>
          </Modal>
        )}
      </Container>
    </>
  );
};
