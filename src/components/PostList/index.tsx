import { List, Container, Textarea, TextareaContainer } from "./styles";
import { MouseEvent, useContext, useState } from "react";
import { IPostList, IPostProps } from "../../interfaces/components";
import Button from "../Button";
import { Request } from "../../backup/post";
import { Post } from "../Post";
import { AuthContext } from "../../contexts/AuthContext";

const PostList = ({ postList }: IPostList) => {
  const [post, setPost] = useState("");
  const { setPosts, techs, users } = useContext(AuthContext);
  const userLogadoId = localStorage.getItem("@portfy(id)");
  const token = localStorage.getItem("@portfy(token)");

  const createPost = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
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
          cols={10}
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
          onClick={(event) => createPost(event)}
        >
          Publicar
        </Button>
      </TextareaContainer>
      {postList.length > 0 ? (
        <List>
          {postList.reverse().map(
            ({ content, id, userAvatar, userId, userName }: IPostProps) => (
              
              <Post
                key={id}
                h2={userName}
                src={userAvatar}
                p={content}
                id={id}
                userId={userId}
                techs={techs}
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
