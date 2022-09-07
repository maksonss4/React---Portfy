import { useEffect, useState } from "react";
import { Request } from "../../backup/post";
import { useContext } from "react";
import { CardsNews } from "../../components/CardsNews";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import PostList from "../../components/PostList";
import { VscFilePdf } from "react-icons/vsc";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import CardUsers from "../../components/Users";

const Feed = () => {
  const { user, posts, setPosts } = useContext(AuthContext);

  useEffect(() => {
    Request.get("/posts")
      .then((response) => setPosts(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <ContainerFeed>
      <Header h2={user.username} location="feed" />
      <MainFeed>
        <DivLeft>
          <CardUser
            iconMore={<AiOutlinePlus size={20} />}
            iconPaper={<VscFilePdf size={20} />}
            iconPencil={<AiFillEdit size={20} />}
          />
        </DivLeft>
        <DivMidle>
          <FriendList />
          <PostList postList={posts} />
        </DivMidle>
      </MainFeed>
      <DivRight>
        <CardUsers />
        <CardsNews />
      </DivRight>
      <FooterMobile />
    </ContainerFeed>
  );
};

export default Feed;
