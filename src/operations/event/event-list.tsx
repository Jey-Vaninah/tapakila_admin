import {
  List,
  Datagrid,
  TextField,
  DateField,
  FunctionField,
  DeleteButton,
  EditButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { Event } from "../../providers";
export const EventList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField source="title" label="Title" />
        <TextField source="slug" label="Slug" />
        <DateField source="start_date" label="Start Date" showTime />
        <TextField source="start_time" label="Start Time" />
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
        <FunctionField
          label="Status"
          render={(event: Event) => {
            return (
              event.status[0].toUpperCase() +
              event.status.slice(1).toLocaleLowerCase()
            );
          }}
        />
      </Datagrid>
    </List>
  );
};
