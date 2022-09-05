import { Post } from "../Post";
import { List, Container, Textarea, TextareaContainer } from "./styles";
import { useState } from "react";
import { IPostList, IPostProps } from "../../interfaces/components";

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
          cols={10}
          onChange={(event) => setPost(event.target.value)}
          name="post-writer"
          placeholder="O que você está pensando?"
        />
        <button type="button" onClick={createPost}>
          Publicar
        </button>
      </TextareaContainer>
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
