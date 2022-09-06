import { Post } from "../Post";
import { List, Container, Textarea, TextareaContainer } from "./styles";
import { useState } from "react";
import { IPostList, IPostProps } from "../../interfaces/components";
import { Request } from "../../backup/post";

const PostList = ({ postList }: IPostList) => {
  const [post, setPost] = useState("");
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWxtYXJhbmhhbzQ4QGdtYWlsLmNvbSIsImlhdCI6MTY2MjQ3ODkzNywiZXhwIjoxNjYyNDgyNTM3LCJzdWIiOiIyIn0.H7WjYwbkhHZGVK5O8q1FwGTAtASe3pVaxkzvOi-9rPE"
  const createPost = () => {
    Request.post("/posts",({content: post, userId:2}))
    .then((response)=>console.log(response))
    .catch((erro)=>console.log(erro))
  };
  return (
    <Container>
      <TextareaContainer>
        <Textarea
          onChange={(event) => setPost(event.target.value)}
          name="post-writer"
          placeholder="          O que você está pensando?"
        />
        <button type="button" onClick={createPost}>
          Publicar
        </button>
      </TextareaContainer>
      <List>
        {postList?.map(
          ({ content, id, userAvatar, userID, userName }: IPostProps) => (
            <Post key={id} src={userAvatar} h2={userName} p={content} id={id} token={token}/>
          )
        )}
      </List>
    </Container>
  );
};

export default PostList;
