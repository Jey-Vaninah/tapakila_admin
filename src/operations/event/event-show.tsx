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
        <DateField source="startDate" showTime />
        <TextField source="startTime" />
        <DateField source="endDate" showTime />
        <TextField source="endTime" />
        <TextField source="ageLimit" />
        <FunctionField
          label="eventHall Id"
          render={(event: Event) => {
            return (
              event?.eventHallId.id
            );
          }}
        />
        <FunctionField
          label="host Id"
          render={(event: Event) => {
            return (
              event?.hostId.id
            );
          }}
        />
        <FunctionField
          label="User Id"
          render={(event: Event) => {
            return (
              event?.userId.id
            );
          }}
        />
        {/* <FunctionField
          label="Status"
          render={(event: Event) => {
            return (
              event.status[0].toUpperCase() +
              event.status.slice(1).toLocaleLowerCase()
            );
          }}
        /> */}
      </SimpleShowLayout>
    </Show>
  );
};
