import { useEffect, useState } from "react";
import { Request } from "../../backup/post";
import { useContext } from "react";
import { CardsNews } from "../../components/CardsNews";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import PostList from "../../components/PostList";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";

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
          <CardUser />
          <FriendList />
        </DivLeft>
        <DivMidle>
          <PostList postList={posts} />
        </DivMidle>
        <DivRight>
          <CardsNews />
        </DivRight>
      </MainFeed>
      <FooterMobile />
    </ContainerFeed>
  );
};

export default Feed;
