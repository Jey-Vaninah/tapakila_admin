import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  required,
  useGetList,
} from "react-admin";
import { useImageUpload } from "../../config/useImageUpload";

const validateTimeFormat = (value: string) => {
  if (value == null || value == "") return undefined;
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
  if (!timeRegex.test(value)) {
    return "L'heure doit être au format HH:mm.";
  }

  return undefined;
};

export const EventCreate = () => {
  const { data: eventHalls = [] } = useGetList("venue");
  const { data: hosts = [] } = useGetList("host");
  const { data: users = [] } = useGetList("user");
  const { data: tags = [] } = useGetList("tag");
  const { imageUrl, handleImageUpload } = useImageUpload();

  return (
    <Create
      resource="event"
      transform={(data) => ({
        ...data,
        eventImage: imageUrl,
      })}
    >
      <SimpleForm>
        <div>
          <Paper elevation={3} sx={{ p: 3, mb: 2, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Event image
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {imageUrl ? (
                <Avatar src={imageUrl} sx={{ width: 150, height: 150 }} />
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
        <SelectInput
          label="User"
          source="user.id"
          choices={users.map((user) => ({
            id: user.id,
            name: user.name,
          }))}
          validate={[required()]}
        />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="slug" validate={[required()]} />
        <TextInput source="description" validate={[required()]} />
        <SelectInput
          label="Host"
          source="host.id"
          choices={hosts.map((host) => ({
            id: host.id,
            name: host.name,
          }))}
          validate={[required()]}
        />
        <SelectInput
          label="Event Hall"
          source="eventHall.id"
          choices={eventHalls.map((event) => ({
            id: event.id,
            name: event.name,
          }))}
          validate={[required()]}
        />
        <DateInput source="startDate" validate={[required()]} />

        <TextInput
          source="startTime"
          label="Start Time"
          validate={[required(), validateTimeFormat]}
        />

        <DateInput source="endDate" />

        <TextInput
          source="endTime"
          label="End Time"
          validate={[validateTimeFormat]}
        />

        <TextInput source="ageLimit" />
        <TextInput source="eventImage" />
        <SelectInput
          label="Tags"
          source="tag.id"
          choices={tags.map((tag) => ({
            id: tag.id,
            name: tag.title,
          }))}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
