import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  UrlField,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="name" label="Name" />
        <TextField source="username" label="Username" />
        <EmailField source="email" label="Email" />
        <DateField source="email_verified_at" label="Verified" showTime />
        <UrlField source="image_url" label="Image" />
        <TextField source="country_id" label="Country" />
        <DateField source="create_at" label="Created" showTime />
        <DateField source="updated_at" label="Updated" showTime />
        <DateField source="deleted_at" label="Deleted" showTime />
      </Datagrid>
    </List>
  );
};
