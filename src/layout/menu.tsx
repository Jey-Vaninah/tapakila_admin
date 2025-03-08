import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";
import { Logout, Menu as RaMenu } from "react-admin";

import profileImage from "../assets/images/profile.png";

export const Menu: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 3,
        bgcolor: "black",
        width: "300px",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            mb: 1,
            width: "100%",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ width: "85px", height: "85px" }} src={profileImage} />
          <Typography sx={{ fontWeight: "bold" }}>Jey Vaninah</Typography>
          <Typography>Foundator</Typography>
        </Box>
        <RaMenu>
          <RaMenu.ResourceItem name="user" />
          <RaMenu.ResourceItem name="event" />
          <RaMenu.ResourceItem name="ticket" />
        </RaMenu>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Logout />
      </Box>
    </Box>
  );
};
