import { CalendarToday, LocationOn, AccessTime } from "@mui/icons-material";
import {
  List,
  useListContext,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import EventLineChart from "./components/event-chart";

export const EventList = () => {
  return (
    <List>
      <EventListContent />
    </List>
  );
};

const EventListContent = () => {
  const { isLoading, data = [] } = useListContext();

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        gap: 2,
        padding: 2,
        backgroundColor: "background.default",
      }}
    >
      {!isLoading && (
        <>
          <EventLineChart events={data} />
          {data.map((record) => (
            <EventCard key={record.id} event={record} />
          ))}
        </>
      )}
    </Box>
  );
};

interface EventCardProps {
  event: any;
  className?: string;
}

const EventCard = ({ event, className }: EventCardProps) => {
  const { slug, title, startDate, startTime, eventHallId, hostId, userId } =
    event;

  return (
    <Card
      className={className}
      sx={{
        "width": 380,
        "margin": 2,
        "&:hover": {
          boxShadow: 6,
        },
        "position": "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
        }}
      >
        <img
          src="/src/assets/images/42.jpg"
          alt={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.3s",
          }}
          loading="lazy"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          padding: "4px 12px",
          borderRadius: "16px",
          fontSize: "0.75rem",
          fontWeight: "medium",
        }}
      >
        {slug}
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CalendarToday sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {startDate}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {startTime}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {eventHallId?.name || "N/A"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Host:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hostId?.name || "N/A"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              User:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userId?.name || "N/A"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <ShowButton record={event} />
          <EditButton record={event} />
          <DeleteButton record={event} />
        </Box>
      </CardContent>
    </Card>
  );
};
