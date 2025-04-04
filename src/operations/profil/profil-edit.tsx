import { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Paper,
  Stack,
  Avatar
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetList, useNotify } from "react-admin";
import { Role, Country, UserUpdate } from "../../providers/types";
import { useProfile } from "../../config/useProfile";
import { userProvider } from "../../providers";
import Loading from "../../common/components/loading";
import { FlexBox } from "../../common/components/flex-box";
import { useImageUpload } from "../../config/useImageUpload";  // Import the custom hook
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


const ProfileEdit = () => {
  const notify = useNotify();
  const userToUpdate = useProfile();
  const [isUpdatingInfo, setIsUpdatingInfo] = useState(false);
  const [isUpdatingSecurity, setIsUpdatingSecurity] = useState(false);

  const { imageUrl, handleImageUpload } = useImageUpload(userToUpdate?.imageUrl); // Use the hook for image upload

  const user = useMemo(() => ({
    id: userToUpdate?.id ?? " ",
    name: userToUpdate?.name ?? " ",
    username: userToUpdate?.username ?? " ",
    email: userToUpdate?.email ?? " ",
    emailVerifiedAt: null,
    password: null,
    newPassword: null,
    confirmPassword: null,
    imageUrl:( imageUrl || userToUpdate?.imageUrl )?? " ", // Set the image URL from the hook
    country: {
      id: userToUpdate?.country.id ?? " ",
      name: userToUpdate?.country.name ?? " ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    role: {
      id: userToUpdate?.role.id ?? " ",
      title: userToUpdate?.role.title ?? " ",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }), [userToUpdate, imageUrl]);

  const { data: roles, isLoading: rolesLoading } = useGetList<Role>("role");
  const { data: countries, isLoading: countriesLoading } = useGetList<Country>("country");

  const {
    register: registerInfo,
    handleSubmit: handleSubmitInfo,
    setValue: setValueInfo,
    formState: { errors: errorsInfo }
  } = useForm<UserUpdate>();

  const {
    register: registerSecurity,
    handleSubmit: handleSubmitSecurity,
    watch,
    formState: { errors: errorsSecurity }
  } = useForm<UserUpdate>();

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        const typedKey = key as keyof UserUpdate;
        setValueInfo(typedKey, user[typedKey]);
      });
    }
    setValueInfo("country.id", user.country?.id || "");
    setValueInfo("role.id", user.role?.id || "");
  }, [user, setValueInfo]);

  const onSubmitInfo = async (formData: UserUpdate) => {
    setIsUpdatingInfo(true);
    if (!userProvider?.saveOrUpdate) {
      notify("Erreur: le service userProvider n'est pas disponible.", { type: "error" });
      return;
    }
    if (user === null) {
      notify("Erreur: utilisateur introuvable.", { type: "error" });
      return;
    }
    try {
      await userProvider.saveOrUpdate({
        data: {...formData, 
          imageUrl: imageUrl
        },
        meta: { mutationType: "UPDATE" },
        id: formData.id,
        previousData: user,
      });
      notify("Informations mises à jour avec succès", { type: "success" });
    } catch (error) {
      console.log(error);
      notify("Erreur lors de la mise à jour des informations", { type: "error" });
    } finally {
      setIsUpdatingInfo(false);
    }
  };

  const onSubmitSecurity = async (formData: UserUpdate) => {
    setIsUpdatingSecurity(true);
    if (!userProvider?.saveOrUpdate) {
      notify("Erreur: le service userProvider n'est pas disponible.", { type: "error" });
      return;
    }
    if (user === null) {
      notify("Erreur: utilisateur introuvable.", { type: "error" });
      return;
    }
    try {
      await userProvider.saveOrUpdate({
        data: {
          ...user,
          password: formData.password, 
          newPassword: formData.newPassword,
        },meta: { mutationType: "UPDATE" },
        id: formData.id,
        previousData: user,
      });
      notify("Mot de passe mis à jour avec succès", { type: "success" });
    } catch (error) {
      console.log(error);
      notify("Erreur lors de la mise à jour du mot de passe", { type: "error" });
    } finally {
      setIsUpdatingSecurity(false);
    }
  };

  if (rolesLoading || countriesLoading) {
    return (
      <FlexBox
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Loading />
      </FlexBox>
    );
  }

  if (!user) return <Loading />;
  const newPasswords = watch("newPassword");

  return (
    <Box sx={{ width: "100%", bgcolor: "#f4f6f8", pb: 5 }}>
      {/* Header */}
      <Box sx={{ width: "100%", height: "35vh", position: "relative", borderRadius: "20px 20px 0 0", backgroundImage: "url('/couverture.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h3" fontWeight="bold">
          Welcome to Tapak'ila
          <Typography variant="subtitle1" fontWeight="bold">"Reserve your spot, without any threat."</Typography>
        </Typography>
      </Box>

      {/* Profile Info */}
      <Box sx={{ display: "flex", alignItems: "center", paddingX: 5, mt: -10 }}>
        <Box>
          <Avatar src={imageUrl} sx={{ width: 150, height: 150, border: "5px solid white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} />
          <Button
                  variant="contained"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  sx={{ textTransform: "none", mt:1 }}
                >
                  Update Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) handleImageUpload(file);
                    }}
                  />
            </Button>
        </Box>
        <Box sx={{ ml: 3, mt: 10 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">{user.name}</Typography>
            <Typography color="textPrimary" sx={{ px: 2 }}>({user.role.title})</Typography>
          </Box>
          <Typography color="textSecondary">@{user.username}</Typography>
        </Box>
      </Box>

      <Box sx={{ mx: "auto", mt: 2, display: "flex", gap: 4, justifyContent: "center", padding: 2 }}>
        {/* Personal Info Form */}
        <form onSubmit={handleSubmitInfo(onSubmitInfo)} style={{ flex: 1 }}>
          <Paper variant="outlined" sx={{ width: "100%", borderRadius: 2, p: 3, boxShadow: 3, position: "relative" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Informations Personnelles</Typography>
            <Stack spacing={2}>
              {/* Add File Input for Image Upload */}
              
              <TextField fullWidth label="Nom d'utilisateur" {...registerInfo("username", { required: true })} margin="normal" error={!!errorsInfo.username} helperText={errorsInfo.username && "Nom requis"} />
              <TextField fullWidth label="Nom" {...registerInfo("name", { required: true })} margin="normal" error={!!errorsInfo.name} helperText={errorsInfo.name && "Nom requis"} />
              <TextField fullWidth label="Email" {...registerInfo("email", { required: true })} margin="normal" error={!!errorsInfo.email} helperText={errorsInfo.email && "Email requis"} />
              <FormControl fullWidth margin="normal">
                <Select
                  {...registerInfo("country.id", { required: true })}
                  value={user.country?.id || ""}
                  onChange={(e) => setValueInfo("country.id", e.target.value)}
                >
                  {countries?.map((c) => (
                    <MenuItem key={c.id} value={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Select
                  {...registerInfo("role.id", { required: true })}
                  value={user.role?.id || ""}
                  onChange={(e) => setValueInfo("role.id", e.target.value)}
                >
                  {roles?.map((r) => (
                    <MenuItem key={r.id} value={r.id}>
                      {r.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Button type="submit" variant="contained" fullWidth disabled={isUpdatingInfo} sx={{ mt: 2, bgcolor: "rgb(43, 200, 190)", color: "white" }}>
              {isUpdatingInfo ? "Mise à jour..." : "Sauvegarder"}
            </Button>
          </Paper>
        </form>
        {/* Security Form */}
      <form onSubmit={handleSubmitSecurity(onSubmitSecurity)} style={{ flex: 1 }}>
        <Paper variant="outlined" sx={{ width: "100%", borderRadius: 2, p: 3, boxShadow: 3, position: "relative" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Sécurité</Typography>
          <Stack spacing={2}>
            <TextField fullWidth label="Ancien mot de passe" type="password" {...registerSecurity("password", { required: true })} margin="normal" error={!!errorsSecurity.password} helperText={errorsSecurity.password && "Mot de passe requis"} />
            <TextField fullWidth label="Nouveau mot de passe" type="password" {...registerSecurity("newPassword")} margin="normal" error={!!errorsSecurity.newPassword} helperText={errorsSecurity.newPassword && "Mot de passe requis"} />
            <TextField fullWidth label="Confirmer le nouveau mot de passe" type="password" {...registerSecurity("confirmPassword", { required: "Confirmation requise", validate: value => value === newPasswords || "Les mots de passe ne correspondent pas" })} margin="normal" error={!!errorsSecurity.confirmPassword} helperText={errorsSecurity.confirmPassword?.message} />
          </Stack>
          <Button type="submit" variant="contained" fullWidth disabled={isUpdatingSecurity} sx={{ mt: 2, bgcolor: "rgb(43, 200, 190)", color: "white" }}>
            {isUpdatingSecurity ? "Mise à jour..." : "Modifier le mot de passe"}
          </Button>
        </Paper>
      </form>
      </Box>
    </Box>
  );
};

export default ProfileEdit;
