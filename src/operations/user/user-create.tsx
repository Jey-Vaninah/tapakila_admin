import { useState } from "react";
import { Create, SimpleForm, TextInput, SelectInput, required, useGetList, SaveButton } from "react-admin";
import { supabase } from "./supabaseClient";
import { Avatar, Box, Button, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const UserCreate = () => {
	const { data: roles = [] } = useGetList("role");
	const { data: countries = [] } = useGetList("country");

	const [imageUrl, setImageUrl] = useState("");
	const [imagePreview, setImagePreview] = useState("");

	// Function to handle file upload
	const handleImageUpload = async (file: File) => {
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
		<Create
			resource="user"
			transform={(data) => ({
				...data,
				imageUrl: imageUrl,
			})}
		>
			<SimpleForm >
				<div style={{
					display: "flex",
                    flexDirection: "row",
					alignItems: "start",
                    justifyContent: "space-between",
                    width: "100%",
					gap: 16,
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

					<SelectInput
						label="Role"
						source="role.id"
						choices={roles.map((role) => ({ id: role.id, name: role.title }))}
						validate={[required()]}
					/>
					<TextInput source="name" label="Full Name" validate={[required()]} fullWidth />
					<TextInput source="username" label="Username" validate={[required()]} fullWidth />
					<TextInput source="email" label="Email" validate={[required()]} fullWidth />
					<TextInput source="password" label="Password" validate={[required()]} type="password" fullWidth />
					<SelectInput
						label="Country"
						source="country.id"
						choices={countries.map((country) => ({ id: country.id, name: country.name }))}
						validate={[required()]}
					/>

				</div>

				</div>
			</SimpleForm>
		</Create>
	);
};
