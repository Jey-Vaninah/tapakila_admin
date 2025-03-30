import { AuthProvider } from "react-admin";
import { getAxiosInstance } from "../config/axios";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await getAxiosInstance().post("/users/login", {
        email: username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("auth", token);
      return await Promise.resolve();
    } catch (error) {
      console.error("Login error:", error);
      return await Promise.reject(new Error("Identifiants incorrects"));
    }
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },

  checkError: (error) => {
    console.error("Erreur d'authentification :", error);
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(),
};
