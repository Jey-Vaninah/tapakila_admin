import {
	Create,
	SimpleForm,
	TextInput,
	DateInput,
	SelectInput,
	required,
	useGetList,
} from "react-admin";

const validateTimeFormat = (value: string) => {
	if (!value) return 'L\'heure est requise.';

	const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
	if (!timeRegex.test(value)) {
		return 'L\'heure doit être au format HH:mm.';
	}

	return undefined;
};

export const EventCreate = () => {
	const { data: eventHalls = [] } = useGetList("eventHall");
	const { data: hosts = [] } = useGetList("host");
	const { data: users = [] } = useGetList("user");

	return (
		<Create>
			<SimpleForm>
				<SelectInput
					label="User"
					source="user.id"
					choices={users.map((user) => ({
						id: user.id,
						name: user.name,
					}))}
					validate={[required()]}
				/>
				<TextInput source="title" validate={[required()]} />
				<TextInput source="slug" validate={[required()]} />
				<TextInput source="description" validate={[required()]} />
				<SelectInput
					label="Host"
					source="host.id"
					choices={hosts.map((host) => ({
						id: host.id,
						name: host.name,
					}))}
					validate={[required()]}
				/>
				<SelectInput
					label="Event Hall"
					source="eventHall.id"
					choices={eventHalls.map((event) => ({
						id: event.id,
						name: event.name,
					}))}
					validate={[required()]}
				/>
				<DateInput source="startDate" validate={[required()]} />

				<TextInput
					source="startTime"
					label="Start Time"
					validate={[required(), validateTimeFormat]}
				/>

				<DateInput source="endDate" />

				<TextInput
					source="endTime"
					label="End Time"
					validate={[validateTimeFormat]}
				/>

				<TextInput source="ageLimit" />
				<TextInput source="eventImage" />
				<TextInput source="category" validate={[required()]} />
			</SimpleForm>
		</Create>
	);
};
