import FooterMobile from "../../components/FooterMobile";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { FeedContainer } from "./styles";

const Feed = () => {
  return (
    <FeedContainer>
      <Header />
      <ul className="UlPosts">
        <Post
          src="https://i1.sndcdn.com/avatars-000510423183-h1ogf3-t500x500.jpg"
          h2="Rider"
          p="salve meusnobres"
        />
        <Post
          src="https://i1.sndcdn.com/avatars-000510423183-h1ogf3-t500x500.jpg"
          h2="Rider"
          p="salve meusnobres"
        />
        <Post
          src="https://i1.sndcdn.com/avatars-000510423183-h1ogf3-t500x500.jpg"
          h2="Rider"
          p="salve meusnobres"
        />
        <Post
          src="https://i1.sndcdn.com/avatars-000510423183-h1ogf3-t500x500.jpg"
          h2="Rider"
          p="salve meusnobres"
        />
      </ul>
      <FooterMobile />
    </FeedContainer>
  );
};
export default Feed;
