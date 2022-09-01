import { IPostContent } from "../../interfaces/components";
import PostContainer from "./styles";

export const Post = ({ src, h2, p }: IPostContent) => {
  return (
    <PostContainer>
      <div className="PostContent">
        <img className="userLogo" src={src} alt="" />
        <div className="PostText">
          <h2 className="UserName">{h2}</h2>
          <p className="contentPost">{p}</p>
        </div>
      </div>
    </PostContainer>
  );
};
