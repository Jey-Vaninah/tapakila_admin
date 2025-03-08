import { Avatar } from "@mui/material";
import {
  DateField,
  EmailField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <FunctionField
        render={(user) => {
          return <Avatar src={user.image_url} />;
        }}
      />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <DateField source="email_verified_at" showTime />
      <EmailField source="email" />
      <DateField source="create_at" showTime />
      <DateField source="updated_at" showTime />
      <DateField source="deleted_at" showTime />
    </SimpleShowLayout>
  </Show>
);
