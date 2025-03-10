import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  DeleteButton,
  EditButton,
  FunctionField,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";

export const TicketList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField source="ticket_number" label="Ticket Number" />
        <TextField source="ticket_type_id" label="Ticket Type" />
        <TextField source="user_id" label="User ID" />
        <TextField source="amount_paid" label="Amount Paid" />
        <TextField source="currency_id" label="Currency" />
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
