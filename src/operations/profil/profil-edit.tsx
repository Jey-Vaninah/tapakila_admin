import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDataProvider, useNotify } from "react-admin";
import { useForm } from "react-hook-form";
import { useRedirect } from "react-admin";
import Loading from "../../common/components/loading";
import { FlexBox } from "../../common/components/flex-box";
import { useProfile } from "../../config/useProfile";
import { User } from "../../providers/types";


const ProfileEdit = () => {
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const { register, handleSubmit, setValue } = useForm<User>();
  const user = useProfile(); // Utilisation du hook

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        const typedKey = key as keyof User;
        setValue(typedKey, user[typedKey]); 
      });
      
    }
  }, [user, setValue]);

  const onSubmit = async (formData: User) => {
    try {
      await dataProvider.update("user", {
        data: formData,
        meta: { mutationType: "UPDATE" },
        id: formData.id,
        previousData: user,
      });
      notify("Profil mis à jour avec succès", { type: "success" });
      if (redirect) redirect("/profile");
    } catch (error) {
      console.log(error);
      notify("Erreur lors de la mise à jour du profil", { type: "error" });
    }
  };

  if (!user)
    return (
      <FlexBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Loading />
      </FlexBox>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" gap={2}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Informations Générales</Typography>
            <TextField
              fullWidth
              label="Nom d'utilisateur"
              {...register("username")}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Nom"
              {...register("name")}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              {...register("email")}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Pays"
              {...register("country.name")}
              margin="normal"
            />
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Sécurité</Typography>
            <TextField
              fullWidth
              label="Mot de passe"
              type="password"
              {...register("password")}
              margin="normal"
            />
          </CardContent>
        </Card>
      </Box>

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Sauvegarder
        </Button>
      </Box>
    </form>
  );
};

export default ProfileEdit;
