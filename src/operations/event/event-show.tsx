import {
	DateField,
	useGetRecordId,
	useShowController,
	ShowControllerProps,
	useGetList,
	ShowBase,
} from "react-admin";
import { Ticket, TicketType } from "../../providers";
import {
	CardMedia,
	Grid,
	Typography,
	Tabs,
	Tab,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Box,
} from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TicketTypesTab = ({
	ticketTypes,
	isLoading,
}: {
	ticketTypes: TicketType[];
	isLoading: boolean;
}) => {
	if (isLoading) {
		return <Loading />;
	}

	return (
		<Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
			<Typography variant="h6" fontWeight="bold" gutterBottom>
				Ticket Types
			</Typography>
			{ticketTypes && ticketTypes.length > 0 ? (
				<TableContainer>
					<Table sx={{ border: "1px solid #e0e0e0" }}>
						<TableHead sx={{ backgroundColor: "#f9fafb" }}>
							<TableRow>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>Name</TableCell>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>Price</TableCell>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>
									Quantity
								</TableCell>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>
									Description
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{ticketTypes.map((ticketType: TicketType) => (
								<TableRow key={ticketType.id}>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticketType.title}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticketType.price}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticketType.availableTicket}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticketType.description}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Typography variant="body1" color="text.secondary">
					You don't have any ticket types yet.
				</Typography>
			)}
		</Paper>
	);
};

const ReservationsTab = ({
	tickets,
	isLoading,
}: {
	tickets: Ticket[];
	isLoading: boolean;
}) => {
	if (isLoading) {
		return <Loading />;
	}

	return (
		<Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
			<Typography variant="h6" fontWeight="bold" gutterBottom>
				Ticket Reservation
			</Typography>
			{tickets && tickets.length > 0 ? (
				<TableContainer>
					<Table sx={{ border: "1px solid #e0e0e0" }}>
						<TableHead>
							<TableRow sx={{ backgroundColor: "#f9fafb" }}>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>
									Ticket Number
								</TableCell>
								<TableCell sx={{ border: "1px solid #e0e0e0" }}>
									Event
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
							{tickets.map((ticket: Ticket) => (
								<TableRow key={ticket.id}>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticket.ticketNumber}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticket.event.title}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticket.amountPaid}
									</TableCell>
									<TableCell sx={{ border: "1px solid #e0e0e0" }}>
										{ticket.currency.title}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Typography variant="body1" color="text.secondary">
					You don't have any tickets yet.
				</Typography>
			)}
		</Paper>
	);
};

const CustomShow = ({ children, ...props }: any) => (
	<ShowBase {...props}>
		<div
			style={{
				padding: 0,
				backgroundColor: "#f9fafb",
				boxShadow: "none",
			}}
		>
			{children}
		</div>
	</ShowBase>
);

export const EventShow = (props: ShowControllerProps<any, Error> | undefined) => {
	const { record, isLoading } = useShowController(props);
	const idEvent = useGetRecordId();
	const [tabValue, setTabValue] = useState(0);

	const { data: ticketTypeData, isLoading: isLoadingTypes } = useGetList(
		"typeTicket",
		{
			filter: { event: idEvent }
		}
	);

	const { data: ticketData, isLoading: isLoadingTickets } = useGetList("ticket", {
		filter: { event: idEvent }
	});

	const ticketTypes : TicketType [] = ticketTypeData as TicketType[];
	const tickets : Ticket [] = ticketData as Ticket[];

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

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
					flexDirection: "start",
					alignItems: "center",
					marginBottom: 2,
					gap: 4,
				}}
			>
				<ArrowBackIcon
					sx={{ cursor: "pointer", marginRight: 1 }}
					onClick={() => window.history.back()}
				/>
				<Typography variant="h5" fontWeight="bold" gutterBottom>
					{record?.title}
				</Typography>
			</Box>
			<Tabs
				value={tabValue}
				onChange={handleTabChange}
				sx={{
					padding: 1,
					borderRadius: 2,
					width: "max-content",
					marginBottom: 2,
					backgroundColor: "#f1f4f9",
					"& .Mui-selected": {
						color: "black",
						textTransform: "bold",
						borderRadius: "5px",
					},
					"& .MuiTabs-indicator": {
						display: "none",
					},
				}}
			>
				<Tab
					label="Event Details"
					sx={{
						backgroundColor: tabValue === 0 ? "white" : "transparent",
					}}
				/>
				<Tab
					label="Ticket Types"
					sx={{
						backgroundColor: tabValue === 1 ? "white" : "transparent",
					}}
				/>
				<Tab
					label="Reservations"
					sx={{
						backgroundColor: tabValue === 2 ? "white" : "transparent",
					}}
				/>
			</Tabs>
			<CustomShow actions={<></>}>
				<Grid sx={{ padding: 2, backgroundColor: "#f9fafb", boxShadow: 0 }}>
					{tabValue === 0 && (
						<Grid
							sx={{
								display: "flex",
								justifyContent: "space-between",
								gap: 4,
								backgroundColor: "transparent",
							}}
						>
							<Paper
								elevation={2}
								sx={{ padding: 0, width: "100%", border: "1px solid #e8ebf3" }}
							>
								<Grid sx={{ padding: 2, marginBottom: 2 }}>
									<Typography variant="h6" fontWeight="bold" gutterBottom>
										Basic Information
									</Typography>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Event Title
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.title || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Status
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.status || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Description
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.description || "---"}
											</Typography>
										</Grid>
									</Grid>
								</Grid>

								<Grid sx={{ padding: 2, marginBottom: 2 }}>
									<Typography variant="h6" fontWeight="bold" gutterBottom>
										Event Details
									</Typography>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Venue
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.eventHall.name || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Host
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.host.name || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Start Date
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.startDate ? (
													<DateField source="startDate" record={record} />
												) : (
													"---"
												)}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Start Time
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.startTime || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												End Date
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.endDate ? (
													<DateField source="endDate" record={record} />
												) : (
													"---"
												)}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												End Time
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.endTime || "---"}
											</Typography>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant="body2"
												fontWeight="bold"
												sx={{ marginBottom: 1 }}
											>
												Age Limit
											</Typography>
											<Typography sx={{ border: "1px solid #e8ebf3", padding: 1 }}>
												{record?.ageLimit || "---"}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Paper>

							<Paper elevation={2} sx={{ border: "1px solid #e8ebf3" }}>
								<Paper elevation={0} sx={{ padding: 2, marginBottom: 2 }}>
									<Typography variant="h6" fontWeight="bold" gutterBottom>
										Event Image
									</Typography>
									<CardMedia
										component="img"
										image={record?.eventImage || "/e.png"}
										alt={record?.title || "Event Image"}
										sx={{ borderRadius: "10px", objectFit: "fit", width:"350px" }}
									/>
								</Paper>

								<Grid sx={{ padding: 2 }}>
									<Typography variant="h6" fontWeight="bold" gutterBottom>
										Organizer
									</Typography>
									<Typography>{record?.user?.name || "---"}</Typography>
									<Typography>Email: {record?.user?.email || "---"}</Typography>
									<Typography>
										Role: {record?.user?.role?.title || "---"}
									</Typography>
									<Typography>
										Country: {record?.user?.country?.name || "---"}
									</Typography>
								</Grid>
							</Paper>
						</Grid>
					)}

					{tabValue === 1 && (
						<TicketTypesTab
							ticketTypes={ticketTypes}
							isLoading={isLoadingTypes}
						/>
					)}

					{tabValue === 2 && (
						<ReservationsTab tickets={tickets} isLoading={isLoadingTickets} />
					)}
				</Grid>
			</CustomShow>
		</>
	);
};