import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";

interface IProject {
  name: string;
  team_name: string;
  role: string;
  description: string;
  deploy_url: string;
  techs: string[];
  userId: number | string;
  id: number | string;
}

const ProjectsAPI = () => {
  const [projects, setProjects] = useState([]);

  //   const {} = useContext()

  const { register, handleSubmit } = useForm<IProject>();

  const createProject = async (data: IProject) => {
    console.log(data);
    // try {
    //   const response = await api.post("/login", data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const getProjects = async () => {
    try {
      const response = await api.get("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async () => {
    try {
      const response = await api.delete("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(createProject)}>
      <input type="texte" placeholder="Nome" {...register("name")} />
      {/* {<p>{errors?.name?.message}</p>} */}
      <input
        type="text"
        placeholder="Nome do time"
        {...register("team_name")}
      />
      {/* {<p>{errors?.team_name?.message}</p>} */}
      <input type="texte" placeholder="Função" {...register("role")} />
      {/* {<p>{errors?.role?.message}</p>} */}
      <input
        type="texte"
        placeholder="Descrição do projeto"
        {...register("description")}
      />
      {/* {<p>{errors?.description?.message}</p>} */}
      <input
        type="texte"
        placeholder="URL do plrojeto"
        {...register("deploy_url")}
      />
      {/* {<p>{errors?.deploy_url?.message}</p>} */}
      <button type="submit">Logar</button>
    </form>
  );
};

export default ProjectsAPI;
