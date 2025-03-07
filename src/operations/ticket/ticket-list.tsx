import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";

export const TicketList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="Ticket ID" />
        <TextField source="ticket_number" label="Ticket Number" />
        <TextField source="ticket_type_id" label="Ticket Type" />
        <TextField source="user_id" label="User ID" />
        <NumberField source="amount_paid" label="Amount Paid" />
        <TextField source="currency_id" label="Currency" />
        <DateField source="create_at" label="Created At" />
        <DateField source="updated_at" label="Updated At" />
        <DateField source="deleted_at" label="Deleted At" />
      </Datagrid>
    </List>
  );
};
