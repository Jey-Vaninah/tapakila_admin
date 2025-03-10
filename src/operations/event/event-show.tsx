import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  FunctionField,
} from "react-admin";
import { Event } from "../../providers";

export const EventShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="slug" />
        <TextField source="description" />
        <DateField source="start_date" showTime />
        <TextField source="start_time" />
        <DateField source="end_date" showTime />
        <TextField source="end_time" />
        <TextField source="age_limit" />
        <FunctionField
          label="Status"
          render={(event: Event) => {
            return (
              event.status[0].toUpperCase() +
              event.status.slice(1).toLocaleLowerCase()
            );
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};
