import { Post } from "../Post";
import { List, Container, Textarea, TextareaContainer } from "./styles";
import { useState } from "react";
import { IPostList, IPostProps } from "../../interfaces/components";
import Button from "../Button";

const PostList = ({ postList }: IPostList) => {
  const [post, setPost] = useState("");

  const createPost = () => {
    console.log(post);
    //call request function and pass post as args
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
      <List>
        {postList?.map(
          ({ content, id, userAvatar, userID, userName }: IPostProps) => (
            <Post key={userID} src={userAvatar} h2={userName} p={content} />
          )
        )}
      </List>
    </Container>
  );
};

export default PostList;
