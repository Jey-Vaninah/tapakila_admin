import {
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
  </Toolbar>
);

const EventEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const EventEdit = () => (
  <Edit actions={<EventEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Id" source="id" />
      <TextInput source="title" />
      <TextInput source="slug" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="startDate" />
      <TextInput source="startTime" />
      <TextInput source="endDate" />
      <TextInput source="endTime" />
      <TextInput source="ageLimit" />
    </SimpleForm>
  </Edit>
);
