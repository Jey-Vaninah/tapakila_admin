import {
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
  </Toolbar>
);

const TicketEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const TicketEdit = () => (
  <Edit actions={<TicketEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Ticket Id" source="id" />
      <TextInput label="Ticket Number" source="ticketNumber" />
      <TextInput label="Ticket Type" source="ticketType.title" />
      <NumberInput label="Amount Paid" source="amountPaid" />
      <DateInput label="Created At" source="createAt" />
      <DateInput label="Updated At" source="updatedAt" />
      <DateInput label="Deleted At" source="deletedAt" />
    </SimpleForm>
  </Edit>
);
