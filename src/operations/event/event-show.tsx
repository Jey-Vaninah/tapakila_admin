import {
  Show,
  TextField,
  DateField,
  Button,
  useGetRecordId,
  useShowController,
  ShowControllerProps,
} from "react-admin";
import { Event } from "../../providers";
import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

export const EventShow = (
  props: ShowControllerProps<any, Error> | undefined
) => {
  const { record, isLoading } = useShowController(props);
  const idEvent = useGetRecordId();
  if (isLoading) {
    return (
      <FlexBox
        sx={{
          display: "flex",
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
  return (
    <Show sx={{ padding: "20px" }}>
      <Card sx={{ padding: "20px", borderRadius: "10px", boxShadow: 3 }}>
        <Grid container spacing={3}>
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="250"
              image="/src/assets/images/42.jpg"
              alt={record?.title || "Event Image"}
              sx={{ borderRadius: "10px" }}
            />
          </Grid>

          {/* Event Details */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight="bold">
              {record?.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {record?.description}
            </Typography>

            <Box sx={{ marginTop: 2 }}>
              {[
                { source: "slug", label: "Slug" },
                { source: "startDate", label: "Start Date", showTime: true },
                { source: "startTime", label: "Start Time" },
                { source: "ageLimit", label: "Age Limit" },
              ].map((field) => (
                <Box key={field.source} sx={{ marginBottom: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {field.label}:
                  </Typography>
                  {field.source === "startDate" ? (
                    <DateField
                      source={field.source}
                      record={record}
                      showTime={field.showTime}
                    />
                  ) : (
                    <TextField
                      source={field.source as keyof Event}
                      record={record}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            marginTop: 3,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Event Hall
          </Typography>
          <Typography>{record?.eventHallId?.name || "N/A"}</Typography>
        </Box>

        <Box
          sx={{
            marginTop: 2,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Host
          </Typography>
          <Typography>{record?.hostId?.name || "N/A"}</Typography>
        </Box>

        <Box
          sx={{
            marginTop: 2,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Organizer
          </Typography>
          <Typography>{record?.userId?.name || "N/A"}</Typography>
          <Typography>Email: {record?.userId?.email || "N/A"}</Typography>
          <Typography>
            Role: {record?.userId?.roleId?.title || "N/A"}
          </Typography>
          <Typography>
            Country: {record?.userId?.countryId?.name || "N/A"}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={`/tickets?eventId=${idEvent}`}
          label="View Tickets"
          sx={{
            "backgroundColor": "#007bff",
            "color": "white",
            "marginTop": 3,
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        />
      </Card>
    </Show>
  );
};
