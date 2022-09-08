import { useEffect } from "react";
import { Request } from "../../backup/post";
import { useContext } from "react";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import { CardsNews } from "../../components/CardsNews";
import PostList from "../../components/PostList";
import { VscFilePdf } from "react-icons/vsc";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";
import { AiFillEdit, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Modal } from "../../components/Modal";
import Form from "../../components/Formulary/styles";
import { SwitchContext } from "../../contexts/SwitchContext";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import { useForm } from "react-hook-form";
import UserProvider from "../../backup/users";
import { IUpdateUser } from "../../interfaces/pages";
import { UploaderButton } from "../../components/Button/styles";

const Dashboard = () => {
  const { user, setUser, posts, setPosts, updateProfile } =
    useContext(AuthContext);
  const { updateUser, setUpdateUser, uploader } = useContext(SwitchContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>();

  useEffect(() => {
    Request.get("/posts")
      .then((response) => setPosts(response.data))
      .catch((erro) => console.log(erro));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUpdateUser(false);
  }, [user.username]);

  return (
    <ContainerFeed>
      <Header h2={user.username} location="feed" />
      <MainFeed>
        <DivLeft>
          <div>
            <CardUser
              iconMore={<AiOutlinePlus size={20} />}
              iconPaper={<VscFilePdf size={20} />}
              iconPencil={<AiFillEdit size={20} />}
            />
            <UserProvider>
              <PostList postList={posts} />
            </UserProvider>
          </div>
        </DivLeft>
        <DivMidle>
          <FriendList />
          <PostList postList={posts} />
        </DivMidle>
      </MainFeed>
      <DivRight>
        <CardsNews />
      </DivRight>
      <FooterMobile />
      {updateUser && (
        <Modal>
          <Form onSubmit={handleSubmit(updateProfile)}>
            <header className="divHeader">
              <h3>Atualizar Perfil</h3>
              <AiOutlineClose onClick={() => setUpdateUser(!updateUser)} />
            </header>
            <CustomInput
              id="username"
              label="Nome de usuário"
              placeholder="Insira o novo nome de usuário"
              register={register}
              error={errors?.username?.message}
            />
            <div className="doubled__buttons">
              <UploaderButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={(files) =>
                  setUser({ ...user, avatar_url: files[0].fileUrl })
                }
              >
                {({ onClick }) => (
                  <Button
                    bg="var(--medium-grey)"
                    color="var(--white)"
                    hover="var(--dark-grey)"
                    onClick={onClick}
                  >
                    Alterar avatar
                  </Button>
                )}
              </UploaderButton>
              <UploaderButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={(files) =>
                  setUser({ ...user, background_img: files[0].fileUrl })
                }
              >
                {({ onClick }) => (
                  <Button
                    bg="var(--medium-grey)"
                    color="var(--white)"
                    hover="var(--dark-grey)"
                    onClick={onClick}
                  >
                    Alterar capa
                  </Button>
                )}
              </UploaderButton>
            </div>
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
              >
                Apagar Conta
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </ContainerFeed>
  );
};

export default Dashboard;
