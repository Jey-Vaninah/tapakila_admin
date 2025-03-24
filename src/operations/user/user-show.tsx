import { Avatar, Box } from "@mui/material";
import {
  DateField,
  EmailField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import { User } from "../../providers";

export const UserShow = () => (
  <Show>
    <FlexBox sx={{ gap: 2, justifyContent: "start" }}>
      <Box sx={{ width: "20%", bgcolor: "green" }}>
        <SimpleShowLayout>
          <FunctionField
            render={(user) => {
              return <Avatar src={user.imageUrl} />;
            }}
          />
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
              return user?.country.name;
            }}
          />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
        </SimpleShowLayout>
      </Box>
      <Box sx={{ width: "45%" }}>
        <SimpleShowLayout>
          <DateField source="emailVerifiedAt" showTime />
          <EmailField source="email" />
          <DateField source="createAt" showTime />
          <DateField source="updatedAt" showTime />
          <DateField source="deletedAt" showTime />
        </SimpleShowLayout>
      </Box>
    </FlexBox>
  </Show>
);
