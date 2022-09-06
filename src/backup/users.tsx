import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ICoreResponse, IStateType } from "../interfaces/contexts";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/login";

interface ILogin {
  email?: string
  password?: string;
}

const UsersAPI = () => {
  const { state } = useLocation();
  const stateType = state as IStateType;

  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const loginApply: SubmitHandler<ILogin> = async (data) => {
    try {
      const response = await api.post<ICoreResponse>("/login", data);
      // prettier-ignore
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
      localStorage.setItem("@portfy(token)", response.data.accessToken);

      setUser(response.data.user);

      const navPath = stateType?.from?.pathname || "/dashboard";
      navigate(navPath, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(loginApply)}>
      <input type="email" placeholder="email" {...register("email")} />
      {<p>{errors?.email?.message}</p>}
      <input type="password" placeholder="senha" {...register("password")} />
      {<p>{errors?.password?.message}</p>}
      <button type="submit">Logar</button>
    </form>
  );
};

export default UsersAPI;
