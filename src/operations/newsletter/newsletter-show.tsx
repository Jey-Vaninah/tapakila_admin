import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  EmailField,
} from "react-admin";

export const NewsletterShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <DateField source="createAt" showTime />
        <DateField source="updatedAt" showTime />
        <DateField source="deletedAt" showTime />
      </SimpleShowLayout>
    </Show>
  );
};
