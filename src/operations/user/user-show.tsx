import {
  DateField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <DateField source="email_verified_at" showTime />
      <EmailField source="email" />
      <UrlField source="image_url" />
      <DateField source="create_at" showTime />
      <DateField source="updated_at" showTime />
      <DateField source="deleted_at" showTime />
    </SimpleShowLayout>
  </Show>
);
