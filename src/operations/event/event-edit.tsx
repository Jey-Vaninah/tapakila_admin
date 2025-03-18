import {
  Button,
  Edit,
  required,
  SaveButton,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from "react-admin";
import { Status } from "../../providers";

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
      <TextInput readOnly label="User Id" source="userId.id" />
      <TextInput readOnly label="Host Id" source="hostId.id" />
      <TextInput readOnly label="Event Hall Id" source="eventHallId.id" />
      <SelectInput
        validate={[required()]}
        source="status"
        choices={[Status.CANCELED, Status.DRAFT, Status.PUBLISHED]}
      />
    </SimpleForm>
  </Edit>
);
