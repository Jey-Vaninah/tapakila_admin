import { useState, useEffect } from "react";
import { authProvider } from "../providers/auth-provider";
import { User } from "../providers/types";
import { useLogout } from "react-admin";

export const useProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const logout = useLogout();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await authProvider.getProfile();
        setUser(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du profil :", error);
        logout();
      }
    };

    fetchProfile();
  }, [logout, user]);
  return user;
};
