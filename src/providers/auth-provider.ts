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

  // Nouvelle méthode pour obtenir les informations du profil
  getProfile: async () => {
    try {
      const token = localStorage.getItem("auth");
      if (!token) {
        return Promise.reject(new Error("Utilisateur non authentifié"));
      }

      // Ajoute le token dans les en-têtes de la requête pour l'authentification
      const response = await getAxiosInstance().get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profile = response.data;
      return profile;
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      return Promise.reject(new Error("Erreur de récupération du profil"));
    }
  },

  getPermissions: () => Promise.resolve(),
};
