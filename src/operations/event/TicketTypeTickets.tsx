import { useParams } from "react-router-dom";
import { useGetList } from "react-admin";
import { Box, Typography } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

const TicketTypeTickets = () => {
	const { ticketTypeId } = useParams<{ ticketTypeId: string }>();

	const { data, isLoading, error } = useGetList("ticket");

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

	const filteredData = data
		? data.filter((ticket: any) => ticket.ticketType.id === ticketTypeId)
		: [];

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
				Tickets  {filteredData[0]?.ticketType.title} for {filteredData[0]?.event.title}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "24px",
					justifyContent: "start",
				}}
			>
				{filteredData.map((ticket: any) => (
					<Box
						key={ticket.id}
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
							{ticket.ticketNumber}
						</Typography>
						<Typography
							variant="body1"
							sx={{ fontSize: "16px", marginBottom: "6px", fontWeight: "500" }}
						>
							💰 amountPaid: <strong>{ticket.amountPaid}</strong>
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "gray", fontSize: "14px", marginBottom: "4px" }}
						>
							✅ Currency: {ticket.currency.title}
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "gray", fontSize: "14px", marginBottom: "12px" }}
						>
							📝 Event {ticket.event.title}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default TicketTypeTickets;
