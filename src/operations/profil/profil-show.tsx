import { Typography, Avatar, Button, Box } from "@mui/material";
import { useRedirect } from "react-admin";
import Loading from "../../common/components/loading";
import { FlexBox } from "../../common/components/flex-box";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Place as PlaceIcon,
  DateRange as DateRangeIcon,
  Update as UpdateIcon,
  Public as PublicIcon,
} from "@mui/icons-material";

import { useProfile } from "../../config/useProfile";

const ProfilePage = () => {
  const redirect = useRedirect();
  const user = useProfile();

  if (!user)
    return (
      <FlexBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Loading />
      </FlexBox>
    );

  return (
    <Box sx={{ width: "100%", bgcolor: "#f4f6f8", pb: 5 }}>
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          height: "35vh",
          position: "relative",
          borderRadius: "20px 20px 0 0",
          backgroundImage: "url('/couverture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to Tapak'ila
          <Typography variant="subtitle1" fontWeight="bold">
            "Reserve your spot, without any threat."
          </Typography>
        </Typography>
      </Box>

      {/* Profile Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: 5,
          mt: -10,
        }}
      >
        <Avatar
          src={user.imageUrl}
          sx={{
            width: 150,
            height: 150,
            border: "5px solid white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box sx={{ ml: 3, mt: 10 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography color="textPrimary" sx={{ px: 2 }}>
              ({user.role.title})
            </Typography>
          </Box>
          <Typography color="textSecondary">@{user.username}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ ml: "auto", backgroundColor: "rgb(43, 200, 190)", mt: 10 }}
          onClick={() => redirect("/profile/edit")}
        >
          Edit Profile
        </Button>
      </Box>

      {/* Details Section */}
      <Box sx={{ display: "flex", gap: 4, mt: 5, px: 5 }}>
        {/* Contact Info */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Contact Information
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
            <EmailIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Email</Typography>
              <Typography color="textSecondary">{user.email}</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
            <PhoneIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Phone Number</Typography>
              <Typography color="textSecondary">034 59 332 38</Typography>
            </Box>
          </Box>
        </Box>

        {/* Location Info */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Location Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
            <PlaceIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Address</Typography>
              <Typography color="textSecondary">
                Lot 227 FKTA Ankadivory
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
            <PublicIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Country</Typography>
              <Typography color="textSecondary">{user.country.name}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Personal Information */}
      <Box
        sx={{
          mt: 4,
          px: 5,
          py: 3,
          marginInline: 5,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Account Information
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <DateRangeIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Created</Typography>
              <Typography color="textSecondary">
                {new Date(user.createdAt).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <UpdateIcon
              sx={{
                color: "rgb(43, 200, 190)",
                border: "2px solid rgb(43, 200, 190)",
                borderRadius: "50%",
                padding: "8px",
                fontSize: "50px",
              }}
            />
            <Box>
              <Typography fontWeight="bold">Updated</Typography>
              <Typography color="textSecondary">
                {new Date(user.updatedAt).toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
