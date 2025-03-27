import {
  Button,
  Edit,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
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

const TicketTypeEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </TopToolbar>
);

export const TicketTypeEdit = () => (
  <Edit actions={<TicketTypeEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="TicketType Id" source="id" />
      <TextInput label="Ticket Number" source="ticketNumber" />
      <TextInput label="Title" source="title" />
      <TextInput label="Slug" source="slug" />
      <TextInput label="Description" source="description" />
	  <NumberInput label="Available Ticket" source="availableTicket" />
	  <NumberInput label="Price" source="price" />
      <DateInput label="Created At" source="createAt" />
      <DateInput label="Updated At" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
