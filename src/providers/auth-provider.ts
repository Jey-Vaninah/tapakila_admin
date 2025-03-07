import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", JSON.stringify({ username }));
      return Promise.resolve();
    }
    return Promise.reject(new Error("Identifiants incorrects"));
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
