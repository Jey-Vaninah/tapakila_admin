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
import { TicketType } from "../../providers";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";

export const TicketTypeList = () => {
  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Ticket Types
        </Typography>
        <CreateButton
          resource="TypeTicket"
          label=" Add Ticket Type"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
        />
      </FlexBox>
      <List resource="typeTicket" pagination={<Pagination />} actions={false}>
        <TicketTypeListContent />
      </List>
    </>
  );
};

const TicketTypeListContent = () => {
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
            All Tickets type
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="title" label="Title" />
          <TextField source="slug" label="Slug" />
          <FunctionField
            label="Event"
            render={(ticket: TicketType) => {
              return ticket?.event.title;
            }}
          />
          <TextField source="availableTicket" label="Available Ticket" />
          <TextField source="price" label="Price" />
          <FunctionField
            label="Currency"
            render={(ticket: TicketType) => {
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
