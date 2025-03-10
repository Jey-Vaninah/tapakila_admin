import { Avatar } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  DeleteButton,
  EditButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { User } from "../../providers";

export const UserList = () => {
  return (
    <List resource="user">
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="Profile"
          render={(user) => {
            return <Avatar src={user.image_url} />
          }}
        />
        <TextField source="name" label="Name" />
        <TextField source="username" label="Username" />
        <EmailField source="email" label="Email" />
        <FunctionField
          label="Role"
          render={(user: User) => {
            return user.role[0].toUpperCase() + user.role.slice(1).toLocaleLowerCase()
          }}
        />
        <FunctionField
          label="Actions"
          render={() => {
            return (<FlexBox sx={{ justifyContent: "start", gap: 2 }}>
              <DeleteButton />
              <EditButton />
            </FlexBox>
            )
          }}
        />
      </Datagrid>
    </List>
  );
};
