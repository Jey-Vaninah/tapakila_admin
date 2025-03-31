import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import {
  DateField,
  EmailField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { User } from "../../providers";

export const UserShow = () => (
  <Show>
    <Box
      display="flex"
      gap={3}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      {/* Profile Section */}
      <Card sx={{ minWidth: 280, textAlign: "center", p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Profile Picture
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <FunctionField
              render={(user: User) => (
                <Avatar
                  src={user.imageUrl || "/default-avatar.png"}
                  sx={{ width: 150, height: 150, bgcolor: "grey.300" }}
                />
              )}
            />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">
            <strong>Role:</strong>{" "}
            <FunctionField
              label="Role"
              render={(user: User) => user?.role.title}
            />
          </Typography>
          <Typography variant="body1">
            <strong>Country:</strong>{" "}
            <FunctionField
              label="Country"
              render={(user: User) => user?.country.name}
            />
          </Typography>
        </CardContent>
      </Card>

      {/* User Details Section */}
      <Card sx={{ flexGrow: 1, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            User Information
          </Typography>
          <SimpleShowLayout>
            <TextField source="name" label="Full Name" />
            <TextField source="username" label="Username" />
            <EmailField source="email" label="Email" />
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Account Details
            </Typography>
            <DateField
              source="emailVerifiedAt"
              label="Email Verified At"
              showTime
            />
            <DateField source="createAt" label="Created At" showTime />
            <DateField source="updatedAt" label="Updated At" showTime />
            <DateField source="deletedAt" label="Deleted At" showTime />
          </SimpleShowLayout>
        </CardContent>
      </Card>
    </Box>
  </Show>
);
