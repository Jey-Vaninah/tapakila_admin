import { Show, SimpleShowLayout, TextField, DateField, NumberField } from "react-admin";

export const TicketShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="ticket_number" />
        <TextField source="ticket_type_id" />
        <TextField source="user_id" />
        <NumberField source="amount_paid" />
        <TextField source="currency_id" />
        <DateField source="create_at" showTime />
        <DateField source="updated_at" showTime />
        <DateField source="deleted_at" showTime />
      </SimpleShowLayout>
    </Show>
  );
};

