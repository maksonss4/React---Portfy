import { Post } from "./Post";
import { List, Container, Textarea, TextareaContainer } from "./styles";
import { useState } from "react";
export interface IpostResponse {
  id: string;
  userAvatar: string;
  userID: string;
  userName: string;
  content: string;
}
export interface IPostList {
  postList?: IpostResponse[];
}

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
          placeholder="          O que você está pensando?"
        />
        <button type="button" onClick={createPost}>
          Publicar
        </button>
      </TextareaContainer>
      <List>
        {postList?.map(({ userId, userAvatar, userName, content }: any) => (
          <Post key={userId} src={userAvatar} h2={userName} p={content} />
        ))}
      </List>
    </Container>
  );
};

export default PostList;
