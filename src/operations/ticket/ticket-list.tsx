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
// import TicketLineChart from "./components/ticket-chart";

export const TicketList = () => {
  return (
    <List>
      <TicketListContent />
    </List>
  );
};

const TicketListContent = () => {
  const { isLoading, data = [] } = useListContext();

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
    <>
      {/* <TicketLineChart tickets={data} /> */}
      <Datagrid bulkActionButtons={false}>
        <TextField source="ticketNumber" label="Ticket Number" />
        <FunctionField
          label="Ticket Type"
          render={(ticket: Ticket) => {
            return ticket?.ticketType.title;
          }}
        />
        <FunctionField
          label="Price"
          render={(ticket: Ticket) => {
            return ticket?.ticketType.price;
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
    </>
  );
};
