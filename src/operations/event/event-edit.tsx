import {
  Edit,
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
  DateInput,
} from "react-admin";
import { Box, Button, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useImageUpload } from "../../config/useImageUpload";

const validateTimeFormat = (value: string) => {
  if (value == null || value == "") return undefined;
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
  if (!timeRegex.test(value)) {
    return "L'heure doit être au format HH:mm.";
  }

  return undefined;
};

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const EventEditActions = () => (
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
        Event Image
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={imageUrl || record?.eventImage || ""}
          style={{ height: 150, backgroundColor: "grey.300" }}
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

export const EventEdit = () => {
  const { data: eventHalls = [] } = useGetList("eventHall");
  const { data: tags = [] } = useGetList("tag");

  const { imageUrl, handleImageUpload } = useImageUpload();

  return (
    <Edit
      resource="event"
      actions={<EventEditActions />}
      transform={(data) => ({
        ...data,
        eventImage: imageUrl || data.eventImage, // Garde l'ancienne image si pas modifiée
      })}
    >
      <SimpleForm toolbar={<CustomToolbar />}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 4,
          }}
        >
          <ImageUploadField
            imageUrl={imageUrl}
            handleImageUpload={handleImageUpload}
          />
          <div>
            <SelectInput
              label="Event Hall"
              source="eventHall.id"
              choices={eventHalls.map((event) => ({
                id: event.id,
                name: event.name,
              }))}
              validate={[required()]}
            />
            <TextInput readOnly label="Id" source="id" />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="name" />
            <TextInput source="description" />
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
            <SelectInput
              label="Tags"
              source="tag.id"
              choices={tags.map((tag) => ({
                id: tag.id,
                name: tag.title,
              }))}
              validate={[required()]}
            />
          </div>
        </div>
      </SimpleForm>
    </Edit>
  );
};
