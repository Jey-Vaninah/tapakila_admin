import {
	Show,
	SimpleShowLayout,
	TextField,
	DateField,
	FunctionField,
	Button,
	useRecordContext,
	useGetRecordId,
} from "react-admin";
import { Event } from "../../providers";
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import { FlexBox } from "../../common/components/flex-box";

export const EventShow = () => {
	const record = useRecordContext<Event>();
	const idEvent = useGetRecordId();
	return (
		<Show sx={{ padding: "10px" }}>
			<FlexBox sx={{ padding: "20px", height: "100%", width: "100%", display: "flex", justifyContent: "start", gap: '20px' }}>
				<Box sx={{ height: "100%", width: "50%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: '20px' }}>
					{[
						{ source: "title", label: "Title" },
						{ source: "slug", label: "Slug" },
						{ source: "description", label: "Description" },
						{ source: "startDate", label: "Start Date", showTime: true },
						{ source: "startTime", label: "Start Time" },
						{ source: "ageLimit", label: "Age Limit" },
					].map((field) => (
						<FlexBox key={field.source} sx={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
							<label style={{ marginRight: 8, fontWeight: "bold" }}>{field.label}:</label>
							{field.source === "startDate" ? (
								<DateField source={field.source} record={record} showTime={field.showTime} />
							) : (
								<TextField source={field.source as keyof Event} record={record} />
							)}
						</FlexBox>
					))}
				</Box>
				<div>
					<label style={{ marginRight: 8, fontWeight: "bold" }}>Event Hall</label>
					<FunctionField
						label="Event Hall"
						render={(event: Event) => {
							return (
								<Box sx={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px' }}>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Name:</label>{event?.eventHallId.name}</div>
									{/* <div>{event?.eventHallId.id}</div> */}
								</Box>
							);
						}}
					/>
					<label style={{ marginRight: 8, fontWeight: "bold" }}>Host</label>
					<FunctionField
						label="Host"
						render={(event: Event) => {
							return (
								<Box sx={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px' }}>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Name:</label>{event?.hostId.name}</div>
									{/* <div>{event?.hostId.id}</div> */}
								</Box>
							);
						}}
					/>
					<label style={{ marginRight: 8, fontWeight: "bold" }}>Organisateur</label>
					<FunctionField
						label="User"
						render={(event: Event) => {
							return (
								<Box sx={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px' }}>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Name:</label>{event?.userId.name}</div>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>UserName:</label>{event?.userId.username}</div>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Email:</label>{event?.userId.email}</div>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Role:</label>{event?.userId.roleId.title}</div>
									<div><label style={{ marginRight: 8, fontWeight: "bold" }}>Country:</label>{event?.userId.countryId.name}</div>
								</Box>
							);
						}}
					/>
					<Button
						component={Link}
						to={`/tickets?eventId=${idEvent}`}
						label="View Tickets"
						sx={{
							backgroundColor: '#007bff',
							color: 'white',
							'&:hover': {
								backgroundColor: '#0056b3',
							},
							gridColumn: 'span 2', // Make the button span both columns
						}}
					/>
				</div>
			</FlexBox>
		</Show>
	);
};
