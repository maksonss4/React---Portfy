import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IGeneralProps } from "../interfaces/components";
import { IAdress, IAuth, IUser } from "../interfaces/contexts";

export const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = ({ children }: IGeneralProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  const [cep, setCep] = useState<IAdress>({});
  const [cepError, setCepError] = useState(false);

  const cepRequest = async (e: React.FocusEvent<HTMLInputElement, Element>) => {
    try {
      const { data } = await axios.get<IAdress>(
        `https://viacep.com.br/ws/${e.target.value}/json/`
      );
      if (data.erro) {
        setCepError(true);
      } else {
        setCep(data);
        setCepError(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=> {
    console.log(cep)
  }, [cep])

  return (
    <AuthContext.Provider value={{ user, loading, cepError, cepRequest }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
