import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";

export const EventShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="slug" />
        <TextField source="description" />
        <DateField source="start_date" showTime />
        <TextField source="start_time" />
        <DateField source="end_date" showTime />
        <TextField source="end_time" />
        <TextField source="age_limit" />
        <DateField source="create_at" showTime />
        <DateField source="updated_at" showTime />
        <DateField source="deleted_at" showTime />
      </SimpleShowLayout>
    </Show>
  );
};
