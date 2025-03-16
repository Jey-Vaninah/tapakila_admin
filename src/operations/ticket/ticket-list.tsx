import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  FunctionField,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { Ticket } from "../../providers";

export const TicketList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField source="ticketNumber" label="Ticket Number" />
        <FunctionField
          label="Ticket Type"
          render={(ticket: Ticket) => {
            return (
              ticket?.ticketType.title
            );
          }}
        />
        <TextField source="amountPaid" label="Amount Paid" />
        <FunctionField
          label="Currency"
          render={(ticket: Ticket) => {
            return (
              ticket?.currencyId.title
            );
          }}
        />
        <FunctionField
          label="Actions"
          render={() => {
            return (
              <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                <DeleteButton />
                <EditButton />
              </FlexBox>
            );
          }}
        />
      </Datagrid>
    </List>
  );
};
