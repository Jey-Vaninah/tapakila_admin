import { Avatar, Box, Paper, Typography } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  DeleteButton,
  EditButton,
  useListContext,
  CreateButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { User } from "../../providers";
import Loading from "../../common/components/loading";
import { Pagination } from "../../common/components/pagination";

export const UserList = () => {
  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Users
        </Typography>
        <CreateButton
          resource="user"
          label=" Add user"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
        />
      </FlexBox>
      <Typography sx={{ color: "grey", mb: 5 }}>Manage your users</Typography>
      <List pagination={<Pagination />} resource="user" actions={false}>
        <UserListContent />
      </List>
    </>
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
    <Paper sx={{ p: 5 }}>
      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          All Users
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          View and manage all users
        </Typography>
      </Box>
      <Datagrid
        sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        bulkActionButtons={false}
      >
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
            return user?.role.title;
          }}
        />
        <FunctionField
          label="Country"
          render={(user: User) => {
            return user?.country.name;
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
    </Paper>
  );
};
