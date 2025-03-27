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
  useGetList,
  SelectInput,
  required,
} from "react-admin";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const TicketTypeEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const TicketTypeEdit = () => {

	return (
  <Edit actions={<TicketTypeEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput label="id" source="id" readOnly />
      <TextInput label="Event" source="event.title" readOnly/>
      <TextInput label="Title" source="title" />
      <TextInput label="Slug" source="slug" />
      <TextInput label="Description" source="description" />
	  <NumberInput label="Available Ticket" source="availableTicket" />
	  <NumberInput label="Price" source="price" />
	  <TextInput label="Currency" source="currency.title" readOnly />
      <DateInput label="Created At" source="createAt" />
      <DateInput label="Updated At" source="updatedAt" />
    </SimpleForm>
  </Edit>
	)
};
