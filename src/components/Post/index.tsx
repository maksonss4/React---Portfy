import { IPostContent } from "../../interfaces/components";
import PostContainer from "./styles";
import { HiUserCircle } from "react-icons/hi";
import {IoMdTrash} from "react-icons/io"
import { Request } from "../../backup/post";

export const Post = ({ src, h2, p, id, token}: IPostContent) => {
  const DeletePost = (id: string|undefined) => {
    Request.delete(`/posts/${id}`)
  }
  return (
    <PostContainer>
      <div className="userDetails">
        {src ? (
          <img className="userLogo" src={src} alt="" />
        ) : (
          <HiUserCircle size={80} />
        )}
      </div>
      <div className="PostContent">
        <h2 className="UserName">{h2}</h2>

        <div className="PostText">
          <p className="contentPost">{p}</p>
        </div>
      </div>
      <button onClick={()=> DeletePost(id)}>
        <IoMdTrash/>
      </button>
      {token && <button>Tem token</button>}
    </PostContainer>
  );
};
