import { AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import CardUser from "../../components/CardUser";
import { Header } from "../../components/Header";
import { HiPencil } from "react-icons/hi";
import { BsFilePdf } from "react-icons/bs";
import { CardsNews } from "../../components/CardsNews";
import { ContainerFeed, DivLeft, DivMidle, DivRight } from "./style";
import { Modal } from "../../components/Modal";
import Form from "../../components/Formulary/styles";
import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import CustomInput from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../validations/updateUser";
import { IAddTech, IUpdateUser } from "../../interfaces/pages";
import { statusOptions } from "../../components/Input/options";
import Button from "../../components/Button";
import PostList from "../../components/PostList";
import FriendList from "../../components/FriendList";
import CardUsers from "../../components/Users";
import FooterMobile from "../../components/FooterMobile";

export const Feed = () => {
  const { user, posts, setTechs } = useContext(AuthContext);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<IUpdateUser>({
    resolver: yupResolver(updateUserSchema)
  });

  // prettier-ignore
  const { register: registerTech, handleSubmit: addHandler, formState: { errors: techErrors } } = useForm<IAddTech>({
  });

  const { updateUser, addTechs, setAddTechs, setUpdateUser } =
    useContext(SwitchContext);
  const token = localStorage.getItem("@portfy(token)");

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const addTechUser: SubmitHandler<IAddTech> = (data) => {
    api
      .post("/techs", { ...data, userId: user.id })
      .then(() =>  api.get("/techs").then((res)=> setTechs(res.data))
      )
      .catch((err) => console.log(err));
      setAddTechs(!addTechs)
  };

  return (
    <>
      <Header h2={user.username} location="dashboard" />
      <ContainerFeed>
        <DivLeft>
          <div className="display-nome_mobile">
            <CardUser
              iconMore={<MdAdd />}
              iconPencil={<HiPencil />}
              iconPaper={<BsFilePdf />}
            />
          </div>
          <div className="display-nome_mobile">
            <FriendList />
          </div>
        </DivLeft>

        <DivMidle>
          <PostList postList={posts} />
        </DivMidle>

        <DivRight>
          <div className="display-nome_mobile">
            <CardUsers />
          </div>
        </DivRight>
        <FooterMobile />
        {updateUser && (
          <Modal>
            <Form>
              <header className="divHeader">
                <h3>Atualizar Perfil</h3>
                <AiOutlineClose onClick={() => setUpdateUser(!updateUser)} />
              </header>
              {/* <CustomInput
                id="username"
                label="Nome de usuário"
                placeholder="Insira o novo nome de usuário"
                register={register}
                error={errors?.username?.message}
              />
              <CustomInput
                id="avatar_url"
                label="URL"
                placeholder="Insira a URL da imagem"
                register={register}
                error={errors?.avatar_url?.message}
              />
              <div className="doubled__buttons">
                <Button
                  buttonStyle="primary"
                  bg="var(--ligth-blue)"
                  color="var(--white)"
                  disColor="var(--disabled-blue)"
                  hover="var(--medium-blue)"
                  type="submit"
                >
                  Salvar
                </Button>
                <Button
                  buttonStyle="primary"
                  bg="var(--color-negative)"
                  color="var(--white)"
                  hover="var(--negative-hover)"
                  type="submit"
                >
                  Apagar Conta
                </Button>
              </div> */}
            </Form>
          </Modal>
        )}
        {addTechs && (
          <Modal>
            <Form onSubmit={addHandler(addTechUser)}>
              <header className="divHeader">
                <h3>Nova Tecnologia</h3>
                <AiOutlineClose onClick={() => setAddTechs(!addTechs)} />
              </header>
              <CustomInput
                id="name"
                label="Tech"
                placeholder="Nova Tecnologia"
                register={registerTech}
                error={techErrors?.tech_name?.message}
              />
              <CustomInput
                select
                id="status"
                label="Status"
                register={registerTech}
                options={statusOptions}
              />
              <Button
                buttonStyle="primary"
                bg="var(--ligth-blue)"
                color="var(--white)"
                disColor="var(--disabled-blue)"
                hover="var(--medium-blue)"
                type="submit"
              >
                Salvar
              </Button>
            </Form>
          </Modal>
        )}
      </ContainerFeed>
    </>
  );
};
