import {
  Button,
  Edit,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from "react-admin";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </Toolbar>
);

const EventEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </TopToolbar>
);

export const EventEdit = () => (
  <Edit actions={<EventEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" />
      <TextInput source="slug" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="start_date" />
      <TextInput source="start_time" />
      <TextInput source="end_date" />
      <TextInput source="end_time" />
      <TextInput source="age_limit" />
      <TextInput source="create_at" />
      <TextInput source="updated_at" />
      <TextInput source="deleted_at" />
    </SimpleForm>
  </Edit>
);
