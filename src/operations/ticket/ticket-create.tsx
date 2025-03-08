import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

export const TicketCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="ticket_number" />
      <TextInput source="ticket_type_id" />
      <TextInput source="user_id" />
      <NumberInput source="amount_paid" />
      <TextInput source="currency_id" />
      <DateInput source="create_at" />
      <DateInput source="updated_at" />
      <DateInput source="deleted_at" />
    </SimpleForm>
  </Create>
);
