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
import { TicketType } from "../../providers";
import Loading from "../../common/components/loading";

export const TicketTypeList = () => {
  return (
    <List>
      <TicketTypeListContent />
    </List>
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
    <Datagrid bulkActionButtons={false}>
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
  );
};
