import { Card, CardContent, TextField, Button, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDataProvider, useNotify } from "react-admin";
import { useForm } from "react-hook-form";
import { User } from "../../providers/types";
import { useRedirect } from 'react-admin';

const ProfileEdit = () => {
	const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const { register, handleSubmit, setValue } = useForm<User>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    dataProvider.getOne("user", { id: "1" }).then(({ data }) => {
      setUser(data);
      Object.keys(data).forEach((key) => setValue(key as keyof User, data[key]));
    });
  }, [dataProvider, setValue]);

  const onSubmit = async (formData: User) => {

    try {
      await dataProvider.update("user", {
		  data: formData, meta: { mutationType: "UPDATE" },
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

  if (!user) return <Typography>Chargement...</Typography>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" gap={2}>
        {/* Section Générale */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Informations Générales</Typography>
            <TextField fullWidth label="Nom d'utilisateur" {...register("username")} margin="normal" />
            <TextField fullWidth label="Nom" {...register("name")} margin="normal" />
            <TextField fullWidth label="Email" {...register("email")} margin="normal" />
            <TextField fullWidth label="Pays" {...register("country_id")} margin="normal" />
          </CardContent>
        </Card>

        {/* Section Sécurité */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Sécurité</Typography>
            <TextField fullWidth label="Mot de passe" type="password" {...register("password")} margin="normal" />
			{/* <TextField fullWidth label="Mot de passe actuel" type="password" {...register("currentPassword")} margin="normal" />
			<TextField fullWidth label="Nouveau mot de passe" type="password" {...register("newPassword")} margin="normal" />
			<TextField fullWidth label="Confirmer le nouveau mot de passe" type="password" {...register("confirmNewPassword")} margin="normal" /> */}
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
