import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  useGetList,
  SelectInput,
} from "react-admin";

export const TicketTypeCreate = () => {
const { data: events = [] } = useGetList('event');
const { data: currencies = [] } = useGetList('currency');

return (
  <Create>
    <SimpleForm>
      <SelectInput
          label="Event"
          source="event.id"
          choices={events.map((event) => ({
            id: event.id,
            name: event.title,
          }))}
          validate={[required()]}
        />
      <TextInput source="title" validate={[required()]} />
      <TextInput source="slug" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <NumberInput source="availableTicket" validate={[required()]} />
      <NumberInput source="price" validate={[required()]} />
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
