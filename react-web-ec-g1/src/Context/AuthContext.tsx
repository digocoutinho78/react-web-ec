import { createContext, useState, ReactNode, FC } from "react";
import { login, newUser } from "../Auth";

export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  entrar: (email: string, password: string) => Promise<string | undefined>;
  registrar: (email: string, password: string) => Promise<string | undefined>;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  entrar: async () => undefined,
  registrar: async () => undefined,
});

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const entrar = async (email: string, password: string) => {
    const userToken = await login(email, password);
    if (userToken) {
      setToken(userToken);
    }else{
      alert("Erro ao acessar")
    }
    return userToken;
  };

  const registrar = async (email: string, password: string) => {
    const userToken = await newUser(email, password);
    if (userToken) {
      setToken(userToken);
    }else{
      alert("Erro na autenticação")
    }
    return userToken;
  };

  const value: AuthContextType = {
    token: token,
    isAuthenticated: !!token,
    entrar: entrar,
    registrar: registrar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
