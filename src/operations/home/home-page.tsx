import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { FlexBox } from "../../common/components/flex-box"
import {
    Event as EventIcon,
    People as PeopleIcon,
    AttachMoney as AttachMoneyIcon,
    Equalizer as EqualizerIcon
} from "@mui/icons-material";
import { ShowButton, EditButton, DeleteButton, useGetList } from "react-admin";

export const HomePage = () => {
    const { data: events = [] } = useGetList("event")
    return (
        <Box>
            <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>Home</Typography>
            <Typography sx={{ color: "grey" }}>Welcme to the Tapakila admin</Typography>
            <FlexBox sx={{ gap: 2, mt: 2 }}>
                <Paper elevation={1} component={FlexBox} sx={{ p: 2, bgcolor: "white", borderRadius: "8px", flex: 1, justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ color: "grey" }}>Total Events</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>3</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem" }}><span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last month</Typography>
                    </Box>
                    <Box sx={{ py: 1, px: "10px", bgcolor: "rgba(43, 200, 190, .2)", borderRadius: "50%" }}>
                        < EventIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
                    </Box>
                </Paper>
                <Paper elevation={1} component={FlexBox} sx={{ p: 2, bgcolor: "white", borderRadius: "8px", flex: 1, justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ color: "grey" }}>Total    Users</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>35</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem" }}><span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last month</Typography>
                    </Box>
                    <Box sx={{ py: 1, px: "10px", bgcolor: "rgba(43, 200, 190, .2)", borderRadius: "50%" }}>
                        < PeopleIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
                    </Box>
                </Paper>
                <Paper elevation={1} component={FlexBox} sx={{ p: 2, bgcolor: "white", borderRadius: "8px", flex: 1, justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ color: "grey" }}>Tickets Sold</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>37</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem" }}><span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last month</Typography>
                    </Box>
                    <Box sx={{ py: 1, px: "10px", bgcolor: "rgba(43, 200, 190, .2)", borderRadius: "50%" }}>
                        < EqualizerIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
                    </Box>
                </Paper>
                <Paper elevation={1} component={FlexBox} sx={{ p: 2, bgcolor: "white", borderRadius: "8px", flex: 1, justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ color: "grey" }}>Total Revenu</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>3</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem" }}><span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last month</Typography>
                    </Box>
                    <Box sx={{ py: 1, px: "10px", bgcolor: "rgba(43, 200, 190, .2)", borderRadius: "50%" }}>
                        < AttachMoneyIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px" }} />
                    </Box>
                </Paper>
            </FlexBox>
            <FlexBox sx={{ gap: 2, mt: 5 }}>
                <Paper elevation={3} sx={{ padding: 2, backgroundColor: "white", flex: 1 }}>
                    <Box sx={{}}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Recent Events
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Latest events on the platform
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
                                {events.map((record) => (
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
                <Paper elevation={3} sx={{ padding: 2, backgroundColor: "white", flex: 1 }}>
                    <Box sx={{}}>
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
                                {events.map((record) => (
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
            </FlexBox>
        </Box>
    )
}
