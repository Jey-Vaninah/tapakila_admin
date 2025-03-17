import { CircularProgress } from "@mui/material";
import {
	List,
	TextField,
	DateField,
	DeleteButton,
	EditButton,
	useListContext,
	ShowButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";

export const EventList = () => {
	return (
		<List>
			<EventListContent />
		</List>
	);
};

const EventListContent = () => {
	const { isLoading, data } = useListContext();

	if (isLoading) {
		return (
			<FlexBox sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
				<h2>Loading Events</h2>
				<CircularProgress />
			</FlexBox>
		);
	}

	return (
		<FlexBox sx={{ flexWrap: "wrap", justifyContent: "start", gap: 2, padding: 2, backgroundColor: (theme) => theme.palette.background.default }}>
			{data && data.map((record) => (
				<FlexBox
					key={record.id}
					sx={{
						flexDirection: "column",
						justifyContent: "start",
						alignItems: "start",
						border: "1px solid",
						borderColor: (theme) => theme.palette.divider,
						borderRadius: "8px",
						padding: 2,
						width: "300px",
						backgroundColor: (theme) => theme.palette.background.paper,
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					}}
				>
					{[
						{ source: "title", label: "Title" },
						{ source: "slug", label: "Slug" },
						{ source: "startDate", label: "Start Date", showTime: true },
						{ source: "startTime", label: "Start Time" },
						{ source: "eventHallId.name", label: "Event Hall" },
						{ source: "hostId.name", label: "Host" },
						{ source: "userId.name", label: "User" },
					].map((field) => (
						<FlexBox key={field.source} sx={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
							<label style={{ marginRight: 8, fontWeight: "bold" }}>{field.label}:</label>
							{field.source === "startDate" ? (
								<DateField source={field.source} record={record} showTime={field.showTime} />
							) : (
								<TextField source={field.source} record={record} />
							)}
						</FlexBox>
					))}
					<FlexBox sx={{ justifyContent: "start", gap: 2, marginTop: 2, borderTop:"1px solid ", borderTopColor: (theme) => theme.palette.divider}}>
						<ShowButton record={record} />
						<EditButton record={record} />
						<DeleteButton record={record} />
					</FlexBox>
				</FlexBox>
			))}
		</FlexBox>
	);
};
