import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import {
  Event as EventIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  Equalizer as EqualizerIcon,
} from "@mui/icons-material";
import { useGetList, useRedirect } from "react-admin";

export const HomePage = () => {
  const { data: currentEvents = [] } = useGetList("current-event");
  const redirect = useRedirect();

  return (
    <Box>
      <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Home
      </Typography>
      <Typography sx={{ color: "grey" }}>
        Welcome to the Tapakila admin
      </Typography>
      <FlexBox sx={{ mt: 2 }}>
        <Paper
          elevation={1}
          component={FlexBox}
          sx={{
            p: 2,
            bgcolor: "white",
            borderRadius: "8px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "grey" }}>Total Events</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              3
            </Typography>
            <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
              <span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
              month
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              px: "10px",
              bgcolor: "rgba(43, 200, 190, .2)",
              borderRadius: "50%",
            }}
          >
            <EventIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
          </Box>
        </Paper>
        <Paper
          elevation={1}
          component={FlexBox}
          sx={{
            p: 2,
            bgcolor: "white",
            borderRadius: "8px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "grey" }}>Total Users</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              35
            </Typography>
            <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
              <span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
              month
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              px: "10px",
              bgcolor: "rgba(43, 200, 190, .2)",
              borderRadius: "50%",
            }}
          >
            <PeopleIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
          </Box>
        </Paper>
        <Paper
          elevation={1}
          component={FlexBox}
          sx={{
            p: 2,
            bgcolor: "white",
            borderRadius: "8px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "grey" }}>Tickets Sold</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              37
            </Typography>
            <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
              <span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
              month
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              px: "10px",
              bgcolor: "rgba(43, 200, 190, .2)",
              borderRadius: "50%",
            }}
          >
            <EqualizerIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
          </Box>
        </Paper>
        <Paper
          elevation={1}
          component={FlexBox}
          sx={{
            p: 2,
            bgcolor: "white",
            borderRadius: "8px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "grey" }}>Total Revenue</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              3
            </Typography>
            <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
              <span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
              month
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              px: "10px",
              bgcolor: "rgba(43, 200, 190, .2)",
              borderRadius: "50%",
            }}
          >
            <AttachMoneyIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
          </Box>
        </Paper>
      </FlexBox>
      <FlexBox sx={{ gap: 2, mt: 5 }}>
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: "white", flex: 1 }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Recent Tickets sales
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Latest ticket purchases
            </Typography>
          </Box>

          <TableContainer sx={{ padding: 2 }}>
            <Table sx={{ border: "1px solid #e0e0e0" }}>
              <TableHead sx={{ backgroundColor: "#f9fafb" }}>
                <TableRow>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Event
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Slug
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Venue
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Host
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentEvents.map((record) => (
                  <TableRow
                    onClick={() => redirect("show", "event", record.id)}
                    key={record.id}
                  >
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      <Box
                        sx={{
                          gap: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
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
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {record.title}
                        </Typography>
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
                      {new Date(record.startDate).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: "white", flex: 1 }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Recent Tickets sales
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Latest ticket purchases
            </Typography>
          </Box>

          <TableContainer sx={{ padding: 2 }}>
            <Table sx={{ border: "1px solid #e0e0e0" }}>
              <TableHead sx={{ backgroundColor: "#f9fafb" }}>
                <TableRow>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Event
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Slug
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Venue
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Host
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentEvents.map((record) => (
                  <TableRow
                    onClick={() => redirect("show", "event", record.id)}
                    key={record.id}
                  >
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      <Box
                        sx={{
                          gap: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
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
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {record.title}
                        </Typography>
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
                      {new Date(record.startDate).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </FlexBox>
    </Box>
  );
};
