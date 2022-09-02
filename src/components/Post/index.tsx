import { IPostContent } from "../../interfaces/components";
import LiContainer from "./styles";

export const Post = ({ src, h2, p }: IPostContent) => {
  return (
    <LiContainer>
      <img src={src} alt="" />
      <div className="PostText">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </LiContainer>
  );
};
