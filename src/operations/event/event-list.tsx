import { List, Datagrid, TextField, DateField } from "react-admin";

export const EventList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="Id" />
        <TextField source="title" label="Title" />
        <TextField source="slug" label="Slug" />
        <TextField source="description" label="Description" />
        <DateField source="start_date" label="Start Date" showTime />
        <TextField source="start_time" label="Start Time" />
      </Datagrid>
    </List>
  );
};
