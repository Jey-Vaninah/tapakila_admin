import { List, useListContext } from "react-admin";
import { Box } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import EventLineChart from "./components/event-chart";
import EventCard from "./components/event-card";

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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: 2,
          backgroundColor: "background.default",
          width: "100%",
          margin: "0 auto",
          height: "max-content",
        }}
      >
        <EventLineChart events={data} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: 4,
          padding: 2,
          backgroundColor: "background.default",
        }}
      >
        {!isLoading && (
          <>
            {data.map((record) => (
              <EventCard key={record.id} event={record} />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
