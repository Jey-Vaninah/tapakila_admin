import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from "react-admin";

export const TicketCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="ticketNumber" validate={[required()]} />
      <TextInput
        label="Ticket Type"
        source="ticketType.title"
        validate={[required()]}
      />
      <NumberInput source="amountPaid" validate={[required()]} />
    </SimpleForm>
  </Create>
);
