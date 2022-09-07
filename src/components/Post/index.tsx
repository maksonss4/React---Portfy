import { IPostContent } from "../../interfaces/components";
import PostContainer from "./styles";
import { HiUserCircle } from "react-icons/hi";

export const Post = ({ src, h2, p }: IPostContent) => {
  return (
    <PostContainer>
      <div className="userDetails">
        {src ? (
          <img className="userLogo" src={src} alt="" />
        ) : (
          <HiUserCircle color="var(--medium-grey)" size={80} />
        )}
      </div>
      <div className="PostContent">
        <h2 className="UserName">{h2}</h2>

        <div className="PostText">
          <p className="contentPost">{p}</p>
        </div>
      </div>
    </PostContainer>
  );
};
