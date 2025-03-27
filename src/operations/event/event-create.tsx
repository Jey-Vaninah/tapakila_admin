import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  TimeInput,
  required,
  SelectInput,
  useGetList,
} from "react-admin";

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
      <TimeInput source="startTime" validate={[required()]} />
      <DateInput source="endDate"  />
      <TimeInput source="endTime"  />
      <TextInput source="ageLimit" />
      <TextInput source="eventImage" />
      <TextInput source="category" validate={[required()]} />

    </SimpleForm>
  </Create> );
};
