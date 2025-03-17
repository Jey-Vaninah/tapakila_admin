import { CircularProgress } from "@mui/material";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	FunctionField,
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
		<FlexBox sx={{ flexWrap: "wrap", gap: 2, padding: 2, backgroundColor: (theme) => theme.palette.background.default }}>
			{data && data.map((record) => (
				<FlexBox
					key={record.id}
					sx={{
						flexDirection: "column",
						border: "1px solid",
						borderColor: (theme) => theme.palette.divider,
						borderRadius: "8px",
						padding: 2,
						width: "300px",
						backgroundColor: (theme) => theme.palette.background.paper,
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					}}
				>
					<TextField source="title" record={record} label="Title" />
					<TextField source="slug" record={record} label="Slug" />
					<DateField source="startDate" record={record} label="Start Date" showTime />
					<TextField source="startTime" record={record} label="Start Time" />
					<TextField source="eventHallId.name" record={record} label="Event Hall" />
					<TextField source="hostId.name" record={record} label="Host" />
					<TextField source="userId.name" record={record} label="User" />
					<FlexBox sx={{ justifyContent: "start", gap: 2, marginTop: 2 }}>
						<DeleteButton record={record} />
						<EditButton record={record} />
						<ShowButton record={record} />
					</FlexBox>
				</FlexBox>
			))}
		</FlexBox>
	);
};
