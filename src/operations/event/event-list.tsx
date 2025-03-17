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
	const { isLoading } = useListContext();

	if (isLoading) {
		return (
			<FlexBox sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
				<h2>Loading Events</h2>
				<CircularProgress />
			</FlexBox>
		);
	}

	return (
		<Datagrid bulkActionButtons={false}>
			<TextField source="title" label="Title" />
			<TextField source="slug" label="Slug" />
			<DateField source="startDate" label="Start Date" showTime />
			<TextField source="startTime" label="Start Time" />
			<FunctionField
				label="Actions"
				render={() => {
					return (
						<FlexBox sx={{ justifyContent: "start", gap: 2 }}>
							<DeleteButton />
							<EditButton />
						</FlexBox>
					);
				}}
			/>
			{/* <FunctionField
				label="Status"
				render={(event: Event) => {
					return (
						event.status[0].toUpperCase() +
						event.status.slice(1).toLocaleLowerCase()
					);
				}}
			/> */}
		</Datagrid>
	);
};
