import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  NumberField,
  FunctionField,
} from "react-admin";
import { Ticket } from "../../providers";

export const TicketShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="ticketNumber" />
        <FunctionField
          label="Ticket Type"
          render={(ticket: Ticket) => {
            return ticket?.ticketType.title;
          }}
        />
        <FunctionField
          label="User Id"
          render={(ticket: Ticket) => {
            return ticket?.userId.id;
          }}
        />
        <NumberField source="amountPaid" />
        <FunctionField
          label="Currency"
          render={(ticket: Ticket) => {
            return ticket?.currencyId.title;
          }}
        />
        <DateField source="createAt" showTime />
        <DateField source="updatedAt" showTime />
        <DateField source="deletedAt" showTime />
      </SimpleShowLayout>
    </Show>
  );
};
