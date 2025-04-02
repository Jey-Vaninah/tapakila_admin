import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  FunctionField,
  useListContext,
  CreateButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { Ticket } from "../../providers";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
// import TicketLineChart from "./components/ticket-chart";

export const TicketList = () => {
  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Tickets{" "}
        </Typography>
        <CreateButton
          resource="ticket"
          label=" Add Ticket"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
        />
      </FlexBox>
      <Typography sx={{ color: "grey", mb: 5 }}>
        Manage all ticket sales
      </Typography>
      <List resource="ticket" pagination={<Pagination />} actions={false}>
        <TicketListContent />
      </List>
    </>
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
    <>
      <Paper sx={{ p: 5 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            All Tickets
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            View and manage all tickets
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
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
      </Paper>
    </>
  );
};
