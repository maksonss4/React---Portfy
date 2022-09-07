import { List, Container, Textarea, TextareaContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { IPostList, IPostProps } from "../../interfaces/components";
import Button from "../Button";
import { Request } from "../../backup/post";
import { Post } from "../Post";
import { AuthContext } from "../../contexts/AuthContext";

const PostList = ({ postList }: IPostList) => {
  const [post, setPost] = useState("");
  const { setPosts, posts } = useContext(AuthContext);

  const userLogadoId = localStorage.getItem("@portfy(id)");
  const token = localStorage.getItem("@portfy(token)");

  const createPost = () => {
    if (post) {
      const data = { content: post, userId: userLogadoId };

      Request.post("/posts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          Request.get("/posts").then((res) => setPosts(res.data));
        })
        .catch((erro) => console.log(erro));
    }
  };

  return (
    <Container>
      <TextareaContainer>
        <Textarea
          onChange={(event) => setPost(event.target.value)}
          name="post-writer"
          placeholder="Descreva a vaga que você está anunciando"
        />
        <Button
          buttonStyle="primary"
          bg="var(--ligth-blue)"
          color="var(--white)"
          disColor="var(--disabled-blue)"
          hover="var(--medium-blue)"
          type="submit"
        >
          Publicar
        </Button>
      </TextareaContainer>
      <h2 className="list__title">Minhas Postagens</h2>
      {postList.length > 0 ? (
        <List>
          { postList.map(
            ({ content, id, userAvatar, userId, userName }: IPostProps) => (
              <Post
                key={id}
                src={userAvatar}
                h2={userName}
                p={content}
                id={id}
                userId={userId}
              />
            )
          )}
        </List>
      ) : (
        <p>Não existem postagens</p>
      )}
    </Container>
  );
};

export default PostList;
