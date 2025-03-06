import Axios, { AxiosInstance } from "axios";
import { Env } from "./env";

let axiosInstance: AxiosInstance | null = null;
export const getAxiosInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    axiosInstance = Axios.create({
      baseURL: Env.apiUrl,
    });
  }
  return axiosInstance;
};
