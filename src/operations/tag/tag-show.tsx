import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
} from "react-admin";

export const TagShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <DateField source="createAt" showTime />
        <DateField source="updatedAt" showTime />
        <DateField source="deletedAt" showTime />
      </SimpleShowLayout>
    </Show>
  );
};
