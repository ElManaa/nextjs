import { createContext,ReactNode } from "react";
import useAuth from "@/app/hooks/useAuth";
import { io, Socket } from "socket.io-client";

interface SocketContextProps {
  socket: Socket | null;
}

interface SocketProviderProps {
  children: ReactNode;
}

// Configure Socket URL
const SOCKETURL : string   =
  process.env.REACT_APP_ENVIRONMENT == "LOCAL"
    ? `${process.env.REACT_APP_LOCAL_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}`
    : process.env.REACT_APP_SOCKET_HOST || ''; 

export const SocketContext = createContext<SocketContextProps>({
  socket: null,
});

  
export const SocketProvider : React.FC<SocketProviderProps> = ({ children }) => {
  const { auth } = useAuth();
  let socket: Socket | null = null;

  if (auth) {
    const getSocketToken = async () => {
      try {
        if (!socket) socket = io(SOCKETURL, { query: { id: auth.id } });
      } catch (err) {
        console.error("tnekit", err);
      }
    };

    !socket && getSocketToken();
  }

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

 
