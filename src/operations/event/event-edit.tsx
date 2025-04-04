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

// Validation de l'heure
const validateTimeFormat = (value: string) => {
  if (value == null || value == "") return undefined;
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
  if (!timeRegex.test(value)) {
    return "L'heure doit être au format HH:mm.";
  }
  return undefined;
};

// Barre d'outils personnalisée
const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

// Actions du formulaire d'édition d'événement
const EventEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

// Champ d'upload de l'image
interface ImageUploadFieldProps {
  imageUrl: string | undefined;
  handleImageUpload: (file: File) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  imageUrl,
  handleImageUpload,
}) => {
  const record = useRecordContext();

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, mb: 3, textAlign: "center", borderRadius: 2 }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Event Image
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={imageUrl || record?.eventImage || ""}
          style={{
            height: 400,
            width: "100%",
            maxWidth: 700,
            backgroundColor: "grey.300",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Box>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{
          "textTransform": "none",
          "paddingX": 4,
          "marginTop": 2,
          "backgroundColor": "primary.main",
          ":hover": {
            backgroundColor: "primary.dark",
          },
        }}
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
  const { data: eventHalls = [] } = useGetList("venue");
  const { data: tags = [] } = useGetList("tag");

  const { imageUrl, handleImageUpload } = useImageUpload();

  return (
    <Edit
      resource="event"
      actions={<EventEditActions />}
      transform={(data) => ({
        ...data,
        eventImage: imageUrl || data.eventImage,
      })}
    >
      <SimpleForm toolbar={<CustomToolbar />} sx={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 4,
            gap: "50px",
            padding: "32px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <ImageUploadField
              imageUrl={imageUrl}
              handleImageUpload={handleImageUpload}
            />
            <SelectInput
              label="Event Hall"
              source="eventHall.id"
              choices={eventHalls.map((event) => ({
                id: event.id,
                name: event.name,
              }))}
              validate={[required()]}
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <TextInput
              label="Event Title"
              source="title"
              fullWidth
              variant="outlined"
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <TextInput
              label="Slug"
              source="slug"
              fullWidth
              variant="outlined"
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <TextInput
              label="Description"
              source="description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <DateInput
              label="Start Date"
              source="startDate"
              validate={[required()]}
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <TextInput
              label="Start Time"
              source="startTime"
              fullWidth
              variant="outlined"
              validate={[required(), validateTimeFormat]}
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <DateInput
              label="End Date"
              source="endDate"
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <TextInput
              label="End Time"
              source="endTime"
              fullWidth
              variant="outlined"
              validate={[validateTimeFormat]}
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <TextInput
              label="Age Limit"
              source="ageLimit"
              fullWidth
              variant="outlined"
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <SelectInput
              label="Tags"
              source="tag.id"
              choices={tags.map((tag) => ({
                id: tag.id,
                name: tag.title,
              }))}
              validate={[required()]}
              sx={{
                "marginBottom": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
          </Box>
        </div>
      </SimpleForm>
    </Edit>
  );
};
