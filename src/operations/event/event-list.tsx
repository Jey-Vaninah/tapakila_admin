import {
  List,
  useListContext,
  CreateButton,
  ShowButton,
  DeleteButton,
  EditButton,
} from "react-admin";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

export const EventList = () => {
  return (
    <List
      actions={false}
      component="div"
      sx={{
        backgroundColor: "#f5f5f5",
      }}
    >
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
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your events
          </Typography>
        </Box>
        <CreateButton
          label="Add Event"
          sx={{
            "padding": 1,
            "backgroundColor": "#07e9d4",
            "color": "white",
            "&:hover": { backgroundColor: "#00C49F" },
          }}
        />
      </Box>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "white" }}>
        <Box sx={{}}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            All Events
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            View and manage all events
          </Typography>
        </Box>

        <TableContainer sx={{ padding: 2 }}>
          <Table sx={{ border: "1px solid #e0e0e0" }}>
            <TableHead sx={{ backgroundColor: "#f9fafb" }}>
              <TableRow>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                  Event
                </TableCell>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>Slug</TableCell>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                  Venue
                </TableCell>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>Host</TableCell>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>Date</TableCell>
                <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((record) => (
                <TableRow key={record.id}>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={record.eventImage}
                        alt={record.title}
                        style={{
                          width: 75,
                          height: 50,
                          marginRight: 10,
                          objectFit: "cover",
                        }}
                      />
                      <Box>
                        <Typography variant="body1">{record.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {record.startDate}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    <Chip
                      label={record.slug}
                      color={
                        record.slug === "published" ? "success" : "default"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    {record.eventHall?.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    {record.host?.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    {record.startDate}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    <ShowButton sx={{ marginLeft: 2 }} record={record} />
                    <EditButton sx={{ marginLeft: 2 }} record={record} />
                    <DeleteButton sx={{ marginLeft: 2 }} record={record} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
