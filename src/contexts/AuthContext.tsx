import { createContext, useEffect, useState } from "react";
import { IGeneralProps } from "../interfaces/components";
import { IAuth, IUser } from "../interfaces/contexts";

export const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = ({ children }: IGeneralProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
