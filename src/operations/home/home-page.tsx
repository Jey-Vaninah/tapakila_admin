import {
	Box,
	CircularProgress,
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
	const { data: currentEvents = [], isLoading : isLoadingEvents } = useGetList("current-event");
	const { data: currentTickets = [], isLoading : isLoadingTickets } = useGetList("current-ticket");
	const { data: dataEvents = [] } = useGetList("event");
	const { data: dataUsers = [] } = useGetList("user");
	const { data: dataTickets = [] } = useGetList("ticket");
	const { data: dataHosts = [] } = useGetList("host");


	console.log(currentTickets);


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
							{dataEvents.length ? dataEvents.length: <CircularProgress size={24}/>}
						</Typography>
						<Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
							<span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
							month
						</Typography>
					</Box>
					<Box
						sx={{
							width:"60px",
							height:"60px",
							display:"flex",
							justifyContent:"center",
							alignItems:"center",
							bgcolor: "rgba(43, 200, 190, .2)",
							borderRadius: "50%",
						}}
					>
						<EventIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px", fontSize:40 }} />
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
							{dataUsers.length ? dataUsers.length : <CircularProgress size={24}/>}
						</Typography>
						<Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
							<span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
							month
						</Typography>
					</Box>
					<Box
						sx={{
							width:"60px",
							height:"60px",
							display:"flex",
							justifyContent:"center",
							alignItems:"center",
							bgcolor: "rgba(43, 200, 190, .2)",
							borderRadius: "50%",
						}}
					>
						<PeopleIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px", fontSize:40 }} />
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
							{dataTickets.reduce((sum, ticket) => sum + parseInt(ticket.ticketNumber), 0)
								? dataTickets.reduce((sum, ticket) => sum + parseInt(ticket.ticketNumber), 0)
								: <CircularProgress size={24} />}
						</Typography>
						<Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
							<span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
							month
						</Typography>
					</Box>
					<Box
						sx={{
							width:"60px",
							height:"60px",
							display:"flex",
							justifyContent:"center",
							alignItems:"center",
							bgcolor: "rgba(43, 200, 190, .2)",
							borderRadius: "50%",
						}}
					>
						<EqualizerIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px", fontSize:40 }} />
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
						<Typography sx={{ color: "grey" }}>Total Host</Typography>
						<Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
							{dataHosts.length ? dataHosts.length :  <CircularProgress size={24} />}
						</Typography>
						<Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
							<span style={{ color: "rgb(43, 200, 190)" }}>+12%</span> vs last
							month
						</Typography>
					</Box>
					<Box
						sx={{
							width:"60px",
							height:"60px",
							display:"flex",
							justifyContent:"center",
							alignItems:"center",
							bgcolor: "rgba(43, 200, 190, .2)",
							borderRadius: "50%",
						}}
					>
						<AttachMoneyIcon sx={{ color: "rgb(43, 200, 190)", mt: "5px", fontSize:40 }} />
					</Box>
				</Paper>
			</FlexBox>
			<FlexBox sx={{ gap: 2, mt: 5, alignItems: "start" }}>
				<Paper
					elevation={3}
					sx={{ padding: 2, backgroundColor: "white", flex: 1 }}
				>
					<Box>
						<Typography variant="h6" fontWeight="bold" gutterBottom>
							Recent Events
						</Typography>
						<Typography variant="body2" color="text.secondary" gutterBottom>
							Latest events on the platform
						</Typography>
					</Box>

					{ !isLoadingEvents ? (<TableContainer sx={{ padding: 2 }}>
						<Table sx={{ border: "1px solid #e0e0e0" }}>
							<TableHead sx={{ backgroundColor: "#f9fafb" }}>
								<TableRow>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Event
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
					</TableContainer>) : <CircularProgress size={24} />}
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

					{!isLoadingTickets ? (<TableContainer sx={{ padding: 2 }}>
						<Table sx={{ border: "1px solid #e0e0e0" }}>
							<TableHead sx={{ backgroundColor: "#f9fafb" }}>
								<TableRow>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Ticket Number
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Event
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Ticket Type
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Amount Paid
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										Currency
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{currentTickets.map((record) => (
									<TableRow
										onClick={() => redirect("show", "ticket", record.id)}
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
												<Typography variant="body1" sx={{ fontWeight: "bold" }}>
													{record.ticketNumber}
												</Typography>
											</Box>
										</TableCell>
										<TableCell sx={{ border: "1px solid #e0e0e0" }}>
											{record.event?.title}
										</TableCell>
										<TableCell sx={{ border: "1px solid #e0e0e0" }}>
											{record.ticketType?.title}
										</TableCell>
										<TableCell sx={{ border: "1px solid #e0e0e0" }}>
											{record.amountPaid}
										</TableCell>
										<TableCell sx={{ border: "1px solid #e0e0e0" }}>
											{record.currency.title}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>) : <CircularProgress size={24} />}
				</Paper>
			</FlexBox>
		</Box>
	);
};
