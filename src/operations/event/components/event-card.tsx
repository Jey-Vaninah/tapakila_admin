import { CalendarToday, LocationOn, AccessTime } from "@mui/icons-material";
import { ShowButton, EditButton, DeleteButton } from "react-admin";
import { Box, Card, CardContent, Typography } from "@mui/material";

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
				"border": "1px solid #ddd",
				"borderRadius": "12px",
				"padding": "16px",
				"width": "320px",
				"backgroundColor": "white",
				"boxShadow": "0 6px 12px rgba(0, 0, 0, 0.1)",
				"transition": "transform 0.3s ease, box-shadow 0.3s ease",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
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
					src="/bg.jpg"
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
					top: 24,
					left: 24,
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

export default EventCard;
