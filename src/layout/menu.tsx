import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";
import { Logout, Menu as RaMenu, useTheme } from "react-admin";
import { useRedirect } from "react-admin";

import profileImage from "../assets/images/profile.png";

export const Menu: FC = () => {
  const [theme] = useTheme();
  const redirect = useRedirect();

  return (
    <Box
      sx={{
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "p": 3,
        "bgcolor": theme === "dark" ? "black" : "rgb(0, 0, 0)",
        "width": "256px",
        "height": "100%",
        "& *:not(.RaMenuItemLink-active)": { color: "white !important" },
        "& .RaMenuItemLink-active, & .RaMenuItemLink-active .MuiListItemIcon-root *":
          { color: "rgb(43, 200, 190) !important" },
        "position": "fixed",
        "top": 0,
        "left": 0,
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
            cursor: "pointer",
          }}
          onClick={() => redirect("/profile")}
        >
          <Avatar sx={{ width: "85px", height: "85px" }} src={profileImage} />
          <Typography sx={{ fontWeight: "bold" }}>Jey Vaninah</Typography>
          <Typography>Admin</Typography>
        </Box>
        <RaMenu>
          <RaMenu.ResourceItem name="user" />
          <RaMenu.ResourceItem name="event" />
          <RaMenu.ResourceItem name="ticket" />
          <RaMenu.ResourceItem name="edit" />
          <RaMenu.ResourceItem name="currency" />
          <RaMenu.ResourceItem name="host" />
        </RaMenu>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Logout />
      </Box>
    </Box>
  );
};
