import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  NumberField,
  FunctionField,
} from "react-admin";
import { TicketType } from "../../providers";

export const TicketTypeShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="slug" />
        <TextField source="description" />
        <FunctionField
          label="Event"
          render={(ticket: TicketType) => {
            return ticket?.event.title;
          }}
        />
        <NumberField source="availableTicket" />
        <NumberField source="price" />
        <FunctionField
          label="Currency"
          render={(ticket: TicketType) => {
            return ticket?.currency.title;
          }}
        />
        <DateField source="createAt" showTime />
        <DateField source="updatedAt" showTime />
      </SimpleShowLayout>
    </Show>
  );
};
