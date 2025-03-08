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
        <TextField source="country_id" label="Country" />
        <FunctionField
          label="Actions"
          render={() => {
            return (<FlexBox sx={{justifyContent:"start", gap:2}}>
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
