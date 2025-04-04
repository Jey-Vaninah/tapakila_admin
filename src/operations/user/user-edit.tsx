import {
  Edit,
  email,
  required,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
  SelectInput,
  useGetList,
  useRecordContext,
} from "react-admin";
import { Avatar, Box, Button, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useImageUpload } from "../../config/useImageUpload";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const UserEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

interface ImageUploadFieldProps {
  imageUrl: string | undefined;
  handleImageUpload: (file: File) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  imageUrl,
  handleImageUpload,
}) => {
  const record = useRecordContext(); // Récupère les données du formulaire

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Profile Picture
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Avatar
          src={imageUrl || record?.imageUrl || ""}
          sx={{ width: 300, height: 300, bgcolor: "grey.300" }}
        />
      </Box>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{ textTransform: "none" }}
      >
        Upload Image
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
    </Paper>
  );
};

export const UserEdit = () => {
  const { data: countries = [] } = useGetList("country");
  const { data: roles = [] } = useGetList("role");

  const { imageUrl, handleImageUpload } = useImageUpload();

  return (
    <Edit
      resource="user"
      actions={<UserEditActions />}
      transform={(data) => ({
        ...data,
        imageUrl: imageUrl || data.imageUrl, // Garde l'ancienne image si pas modifiée
      })}
    >
      <SimpleForm toolbar={<CustomToolbar />}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
            gap:16,
            marginBottom: 4,
          }}
        >
          <ImageUploadField
            imageUrl={imageUrl}
            handleImageUpload={handleImageUpload}
          />
          <div>
            <TextInput readOnly label="Id" source="id" fullWidth />
            <TextInput
              source="name"
              label="Full Name"
              validate={[required()]}
              fullWidth
            />
            <SelectInput
              label="Role"
              source="role.id"
              choices={roles.map((c) => ({ id: c.id, name: c.title }))}
              validate={[required()]}
              defaultValue={roles.length > 0 ? roles[0].id : ""}
            />
            <TextInput
              source="username"
              label="Username"
              validate={[required()]}
              fullWidth
            />
            <TextInput
              source="email"
              label="Email"
              validate={[required(), email()]}
              fullWidth
            />
            <SelectInput
              label="Country"
              source="country.id"
              choices={countries.map((c) => ({ id: c.id, name: c.name }))}
              validate={[required()]}
              defaultValue={countries.length > 0 ? countries[0].id : ""}
            />
          </div>
        </div>
      </SimpleForm>
    </Edit>
  );
};
