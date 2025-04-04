import { Box, Paper, Typography, Button } from "@mui/material";
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
import { useProfile } from "../../config/useProfile";

// Validation de l'heure
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
  const { data: tags = [] } = useGetList("tag");
  const { data: hosts = [] } = useGetList("host");
  const { imageUrl, handleImageUpload } = useImageUpload();
  const profile = useProfile();

  return (
    <Create
      resource="event"
      transform={(data) => ({
        ...data,
        eventImage: imageUrl,
        user: profile,
      })}
    >
      <SimpleForm>
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
          {/* Colonne gauche */}
          <Box sx={{ width: "50%" }}>
            <Paper elevation={3} sx={{ p: 3, mb: 2, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Event Image
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    style={{
                      width: 700,
                      height: 300,
                      borderRadius: "30px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 700,
                      height: 300,
                      backgroundColor: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                    }}
                  >
                    <CloudUploadIcon sx={{ fontSize: 50, color: "white" }} />
                  </Box>
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
            <TextInput
              label="Event Title"
              source="title"
              fullWidth
              variant="outlined"
              sx={{
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
              label="Event Hall"
              source="eventHall.id"
              choices={eventHalls.map((event) => ({
                id: event.id,
                name: event.name,
              }))}
              validate={[required()]}
              sx={{
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiSelect-root": {
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                },
              }}
            />
            <SelectInput
              label="Host"
              source="host.id"
              choices={hosts.map((host) => ({
                id: host.id,
                name: host.name,
              }))}
              validate={[required()]}
              sx={{
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiSelect-root": {
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                },
              }}
            />

            <TextInput
              label="Slug"
              source="slug"
              fullWidth
              variant="outlined"
              sx={{
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

          {/* Colonne droite */}
          <Box sx={{ width: "50%" }}>
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
    </Create>
  );
};
