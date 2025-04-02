import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  useGetList,
  SelectInput,
} from "react-admin";

export const TicketCreate = () => {
  const { data: ticketTypes = [] } = useGetList("typeTicket");
  const { data: events = [] } = useGetList("event");
  const { data: users = [] } = useGetList("user");
  const { data: currencies = [] } = useGetList("currency");

  return (
    <Create>
      <SimpleForm>
        <TextInput source="ticketNumber" validate={[required()]} />
        <SelectInput
          label="Event"
          source="event.id"
          choices={events.map((event) => ({
            id: event.id,
            name: event.title,
          }))}
          validate={[required()]}
        />
        <SelectInput
          label="Ticket Type"
          source="ticketType.id"
          choices={ticketTypes.map((ticketType) => ({
            id: ticketType.id,
            name: ticketType.title,
          }))}
          validate={[required()]}
        />

        <SelectInput
          label="User"
          source="user.id"
          choices={users.map((user) => ({
            id: user.id,
            name: user.name,
          }))}
          validate={[required()]}
        />
        <NumberInput source="amountPaid" validate={[required()]} />
        <SelectInput
          label="Currency"
          source="currency.id"
          choices={currencies.map((currency) => ({
            id: currency.id,
            name: currency.title,
          }))}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
