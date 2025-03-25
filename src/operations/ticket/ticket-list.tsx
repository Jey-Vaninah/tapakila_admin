import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  FunctionField,
  useListContext,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { Ticket } from "../../providers";
import Loading from "../../common/components/loading";

export const TicketList = () => {
  return (
    <List>
      <TicketListContent />
    </List>
  );
};

const TicketListContent = () => {
  const { isLoading } = useListContext();

  if (isLoading) {
    return (
      <FlexBox
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Loading />
      </FlexBox>
    );
  }

  return (
    <Datagrid bulkActionButtons={false}>
      <TextField source="ticketNumber" label="Ticket Number" />
      <FunctionField
        label="Ticket Type"
        render={(ticket: Ticket) => {
          return ticket?.ticketType.title;
        }}
      />
      <TextField source="amountPaid" label="Amount Paid" />
      <FunctionField
        label="Currency"
        render={(ticket: Ticket) => {
          return ticket?.currency.title;
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
  );
};
