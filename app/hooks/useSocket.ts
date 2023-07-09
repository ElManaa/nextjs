import { useContext } from "react";
import { SocketContext } from "@/app/context/SocketProvider";

const useSocket = () => {
    return useContext(SocketContext).socket;
}

export default useSocket;
