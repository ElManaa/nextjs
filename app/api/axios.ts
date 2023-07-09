import axios, { AxiosInstance } from "axios";

const BASE_URL =
  process.env.REACT_APP_ENVIRONMENT == "LOCAL"
    ? `${process.env.REACT_APP_LOCAL_API_HOST}:${process.env.REACT_APP_API_PORT}`
    : process.env.REACT_APP_API_HOST;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
 
export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
