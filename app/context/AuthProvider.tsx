import { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  auth: any; // Replace 'any' with the appropriate type for the auth state
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the appropriate type for the setAuth function
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: null,
  setAuth: () => {},
  persist: false,
  setPersist: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<any>(null); 
  const [persist, setPersist] = useState<boolean>(true);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}> 
      {children}
    </AuthContext.Provider>
  );
};
 