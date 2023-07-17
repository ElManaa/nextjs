import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  auth: any; // Replace 'any' with the appropriate type for the auth state
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the appropriate type for the setAuth function
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
  session : any,
  status : string,
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: null,
  setAuth: () => {},
  persist: false,
  setPersist: () => {},
  session : useSession() ,
  status : ""
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<any>(null); 
  const [persist, setPersist] = useState<boolean>(true);
  const { data: session, status } = useSession();

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist , session , status }}> 
      {children}
    </AuthContext.Provider>
  );
};
 