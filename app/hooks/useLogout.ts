import axios from "@/app/api/axios" ;
import useAuth from "./useAuth";
import { useRouter } from "next/router";

const useLogout = () => {

    const { setAuth , setPersist } = useAuth();
    const router = useRouter()
   
    const logout = async () => {
        setAuth({});
        setPersist(false); 
        try {
            localStorage.removeItem('persist')
            const response = await axios('/auth/logout', {
                withCredentials: true
            });
            router.push("/login");
            return response
        } catch (err) {
            console.error(err);
        } 
    } 
    return logout;
}

export default useLogout