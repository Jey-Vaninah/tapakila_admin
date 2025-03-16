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
  FunctionField,
  required,
} from "react-admin";
import { Ticket } from "../../providers";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </Toolbar>
);

const TicketEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
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
