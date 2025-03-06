import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  TimeInput,
} from "react-admin";

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="slug" />
      <TextInput source="description" />
      <DateInput source="start_date" />
      <TimeInput source="start_time" />
      <DateInput source="end_date" />
      <TimeInput source="end_time" />
      <TextInput source="age_limit" />
      <DateInput source="create_at" />
      <DateInput source="updated_at" />
      <DateInput source="deleted_at" />
    </SimpleForm>
  </Create>
);
