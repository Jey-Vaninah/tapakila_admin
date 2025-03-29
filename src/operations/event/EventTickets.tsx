import { Link, useParams } from "react-router-dom";
import { useGetList } from "react-admin";
import { Box, Button, Typography } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

const EventTickets = () => {
	const { eventId } = useParams<{ eventId: string }>();

	const { data, isLoading, error } = useGetList("ticketType");

	const filteredData = data
		? data.filter((ticketTipe: any) => ticketTipe.event.id === eventId)
		: [];
	if (isLoading) {
		return (
			<FlexBox
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "80vh",
					backgroundColor: "white",
				}}
			>
				<Loading />
			</FlexBox>
		);
	}

	if (error) {
		return <Typography>Error: {error.message}</Typography>;
	}

	return (
		<Box
			sx={{ padding: "24px", backgroundColor: "#f8f9fa", borderRadius: "12px" }}
		>
			<Typography
				variant="h4"
				sx={{
					marginBottom: "24px",
					fontWeight: "bold",
					textAlign: "start",
					color: "#333",
				}}
			>
				TicketTypes for {filteredData[0]?.event.title}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "24px",
					justifyContent: "start",
				}}
			>
				{filteredData.map((ticketTipe: any) => (
					<Box
						key={ticketTipe.id}
						sx={{
							"border": "1px solid #ddd",
							"borderRadius": "12px",
							"padding": "20px",
							"width": "320px",
							"background/tickets/ticketTypeId/Color": "white",
							"boxShadow": "0 6px 12px rgba(0, 0, 0, 0.1)",
							"transition": "transform 0.3s ease, box-shadow 0.3s ease",
							"&:hover": {
								transform: "scale(1.05)",
								boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
							},
						}}
					>
						<Typography
							variant="h6"
							sx={{ fontWeight: "bold", marginBottom: "8px", color: "#007bff" }}
						>
							{ticketTipe.title}
						</Typography>
						<Typography
							variant="body1"
							sx={{ fontSize: "16px", marginBottom: "6px", fontWeight: "500" }}
						>
							💰 Price: <strong>{ticketTipe.price}</strong>
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "gray", fontSize: "14px", marginBottom: "4px" }}
						>
							✅ Available: {ticketTipe.availableTicket}
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "gray", fontSize: "14px", marginBottom: "12px" }}
						>
							📝 {ticketTipe.description}
						</Typography>
						<Box sx={{ textAlign: "center" }}>
							<Link
								to={`/tickets/ticketTypeId/${ticketTipe.id}`}
								style={{ textDecoration: "none" }}
							>
								<Button
									variant="contained"
									sx={{
										"backgroundColor": "#007bff",
										"&:hover": { backgroundColor: "#0056b3" },
									}}
								>
									View Tickets
								</Button>
							</Link>
						</Box>
					</Box>
				))}
			</Box>

			<Box sx={{ marginTop: "24px", textAlign: "end" }}>
				<Typography
					variant="h6"
					sx={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}
				>
					🎫 Total Tickets:{" "}
					{Array.isArray(filteredData)
						? filteredData.reduce((total, ticketTipe) => total + Number(ticketTipe.availableTicket || 0), 0)
						: 0}
				</Typography>
			</Box>
		</Box>
	);
};

export default EventTickets;
