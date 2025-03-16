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
            return <Avatar src={user.imageUrl} />;
          }}
        />
        <TextField source="name" label="Name" />
        <TextField source="username" label="Username" />
        <EmailField source="email" label="Email" />
        <FunctionField
          label="Role"
          render={(user: User) => {
            return (
              user?.roleId?.title[0].toUpperCase() +
              user?.roleId?.title.slice(1)?.toLocaleLowerCase()
            );
          }}
        />

        <FunctionField
          label="Contry"
          render={(user: User) => {
            return (
              user?.countryId.name
            );
          }}
        />
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
      </Datagrid>
    </List>
  );
};
