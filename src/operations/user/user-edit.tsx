import { useState } from "react";
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
  useEditContext,
} from "react-admin";
import { supabase } from "./supabaseClient";
import { Avatar, Box, Button, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

export const UserEdit = () => {
  const { data: roles = [] } = useGetList("role");
  const { data: countries = [] } = useGetList("country");

  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = async (file : File) => {
    if (!file) return;

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `avatars/${fileName}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error);
      return;
    }

    const publicUrl = supabase.storage.from("images").getPublicUrl(filePath).data.publicUrl;
    setImageUrl(publicUrl);
    setImagePreview(publicUrl);
  };

  return (
    <Edit resource="user"
			actions={<UserEditActions />}
			transform={(data) => ({
				...data,
				imageUrl: imageUrl,
			})}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 4,
        }}>

          <div>
            <Paper elevation={3} sx={{ p: 3, mb: 2, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Profile Picture
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                {imagePreview ? (
                  <Avatar src={imagePreview} sx={{ width: 150, height: 150 }} />
                ) : (
                  <Avatar sx={{ width: 150, height: 150, bgcolor: "grey.300" }} />
                )}
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
                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                />
              </Button>
            </Paper>
          </div>
          <div>
            <TextInput readOnly label="Id" source="id" fullWidth />
            <TextInput source="name" label="Full Name" validate={[required()]} fullWidth />
            <TextInput source="username" label="Username" validate={[required()]} fullWidth />
            <TextInput source="email" label="Email" validate={[required(), email()]} fullWidth />
            <SelectInput
              label="Role"
              source="role.id"
              choices={roles.map((role) => ({ id: role.id, name: role.title }))}
              validate={[required()]}
            />
            <SelectInput
              label="Country"
              source="country.id"
              choices={countries.map((country) => ({ id: country.id, name: country.name }))}
              validate={[required()]}
            />
          </div>
        </div>
      </SimpleForm>
    </Edit>
  );
};
