import { AxiosResponse } from 'axios';
import axios from '@/app/api/axios';
import useAuth from './useAuth'; 
 
type RefreshResponseData = {
    id: string;
    roles: string[];
    accessToken: string;
    balance: number;
    avatar: string;
    username: string;
  };

const useRefreshToken = () => {
    const { setAuth  } = useAuth();

    const refresh = async () : Promise<string> => { 
        const response : AxiosResponse  = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        response.data  = response.data.data 
        setAuth((prev : RefreshResponseData ) => { 
            return {
                ...prev,
                id : response.data.id,
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                balance : response.data.balance,
                avatar : response.data.avatar,
                username : response.data.username
            }
        }); 
        return response.data.accessToken;
    }
    return refresh;
};

 

export default useRefreshToken;
