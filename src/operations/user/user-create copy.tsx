import { useState } from "react";
import { Create, SimpleForm, TextInput, SelectInput, ImageInput, required, useGetList } from "react-admin";
import { supabase } from './supabaseClient';  // Import your Supabase client

export const UserCreate = () => {
  const { data: roles = [] } = useGetList("role");
  const { data: countries = [] } = useGetList("country");

  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState(""); // State for image preview


  // Function to handle file upload
  const handleImageUpload = async (files : File) => {
    const file = files; // Get the first file from the dropped files
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `avatars/${fileName}`;

      // Upload the image to Supabase storage
      const { data, error } = await supabase.storage
        .from("images") // Replace with your storage bucket name
        .upload(filePath, file);

      if (error) {
        console.error("Error uploading image:", error);
        return;
      }

      // Get the URL of the uploaded image
      const publicUrl = supabase.storage
        .from("images")
        .getPublicUrl(filePath).data.publicUrl;

      setImageUrl(publicUrl); // Set the URL for your ImageInput field
      setImagePreview(publicUrl); // Set the URL for your ImageInput field
    }
  };

  return (
    <Create
		resource="user"
		transform={(data) => ({
			...data,
			imageUrl: imageUrl,
		})}
	>
      <SimpleForm>
         {/* Custom file input for uploading images */}
		 <div>
          <label htmlFor="imageUrl">Profile Picture</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                handleImageUpload(file);
              }
            }}
          />
        </div>

        {/* Display the image preview if an image has been selected */}
        {imagePreview && (
          <div>
            <h4>Image Preview:</h4>
            <img src={imagePreview} alt="Image Preview" width="200" />
          </div>
        )}
        <SelectInput
          label="Role"
          source="role.id"
          choices={roles.map((role) => ({
            id: role.id,
            name: role.title,
          }))}
          validate={[required()]}
        />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="username" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="password" validate={[required()]} />
        <SelectInput
          label="Country"
          source="country.id"
          choices={countries.map((country) => ({
            id: country.id,
            name: country.name,
          }))}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
