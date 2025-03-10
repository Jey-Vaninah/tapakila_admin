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
              return <Avatar src={user.image_url} />;
            }}
          />
          <FunctionField
            label="Role"
            render={(user: User) => {
              return (
                user.role[0].toUpperCase() +
                user.role.slice(1).toLocaleLowerCase()
              );
            }}
          />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
        </SimpleShowLayout>
      </Box>
      <Box sx={{ width: "45%" }}>
        <SimpleShowLayout>
          <DateField source="email_verified_at" showTime />
          <EmailField source="email" />
          <DateField source="create_at" showTime />
          <DateField source="updated_at" showTime />
          <DateField source="deleted_at" showTime />
        </SimpleShowLayout>
      </Box>
    </FlexBox>
  </Show>
);
