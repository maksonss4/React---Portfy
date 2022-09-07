import { IPostContent } from "../../interfaces/components";
import PostContainer from "./styles";
import { HiUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { Request } from "../../backup/post";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Post = ({ src, h2, p, id }: IPostContent) => {
  const token = localStorage.getItem("@portfy(token)");
  const { setPosts } = useContext(AuthContext);

  const DeletePost = (id: string | undefined) => {
    Request.delete(`/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() =>
      Request.get("/posts").then((res) => setPosts(res.data.reverse()))
    );
  };

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
      <button onClick={() => DeletePost(id)}>
        <IoMdTrash />
      </button>
    </PostContainer>
  );
};
