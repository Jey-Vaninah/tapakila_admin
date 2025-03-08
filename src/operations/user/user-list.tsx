import { Avatar } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  FunctionField,
} from "react-admin";

export const UserList = () => {
  return (
    <List resource="user">
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="Profile"
          render={(user) => <Avatar src={user.image_url} />}
        />
        <TextField source="name" label="Name" />
        <TextField source="username" label="Username" />
        <EmailField source="email" label="Email" />
        <DateField source="email_verified_at" label="Verified" showTime />
        <TextField source="country_id" label="Country" />
      </Datagrid>
    </List>
  );
};
