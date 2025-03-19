import { Avatar, CircularProgress } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  DeleteButton,
  EditButton,
  useListContext,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { User } from "../../providers";
import Loading from "../../common/components/loading";

export const UserList = () => {
  return (
    <List resource="user">
      <UserListContent />
    </List>
  );
};

const UserListContent = () => {
  const { isLoading } = useListContext();

  if (isLoading) {
    return (
      <FlexBox
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Loading />
      </FlexBox>
    );
  }

  return (
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
        label="Country"
        render={(user: User) => {
          return user?.countryId.name;
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
  );
};
