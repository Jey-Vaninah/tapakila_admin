import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export const useImageUpload = (initialImageUrl?: string) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || "");

  useEffect(() => {
    if (initialImageUrl) {
      setImageUrl(initialImageUrl);
    }
  }, [initialImageUrl]);

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    const extension = file.name.split(".").pop(); // Récupère l'extension
    const fileName = `${Date.now()}.${extension}`;
    const filePath = `avatars/${fileName}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error);
      return;
    }

    const publicUrl = supabase.storage.from("images").getPublicUrl(filePath)
      .data.publicUrl;
    setImageUrl(publicUrl);
  };

  return { imageUrl, handleImageUpload };
};
