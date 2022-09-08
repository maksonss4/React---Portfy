import { IPostContent } from "../../interfaces/components";
import PostContainer from "./styles";
import { HiUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { Request } from "../../backup/post";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Post = ({ src, h2, techs, p, id }: IPostContent) => {
  const token = localStorage.getItem("@portfy(token)");
  const { user, setPosts } = useContext(AuthContext);

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
          <HiUserCircle color="var(--medium-blue)" size={80} />
        )}
      </div>
      <div className="PostContent">
        <div className="user-name-and-techs">
          <h2>{h2}</h2>
          <p>
            {techs &&
              techs
                .filter((e) => e.userId === user.id)
                .map((tech) => tech.name)
                .join(" | ")}
          </p>
        </div>
        <p>{user.role}</p>
        <div className="PostText">
          <p className="contentPost">{p}</p>
        </div>
      </div>

      <button title="button" onClick={() => DeletePost(id)}>
        <IoMdTrash color="var(--color-negative)" size={30} />
      </button>
    </PostContainer>
  );
};
