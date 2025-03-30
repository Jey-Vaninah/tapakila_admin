import {
  Avatar,
  Box,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { Logout, useTheme } from "react-admin";
import { useRedirect, useResourceDefinition } from "react-admin";
import { useLocation } from "react-router-dom"; // ✅ Ajouté pour détecter la page active
import profileImage from "../assets/images/profile.png";

const CustomMenuItem = ({ name }: { name: string }) => {
  const redirect = useRedirect();
  const resource = useResourceDefinition({ resource: name });
  const location = useLocation();
  const isActive = location.pathname.startsWith(`/${name}`); // ✅ Vérifie si actif

  return (
    <MenuItem
      onClick={() => redirect(`/${name}`)}
      sx={{
        "marginBlock": 1,
        "display": "flex", // ✅ Assure que tout est aligné
        "alignItems": "center", // ✅ Centre l'icône et le texte
        "backgroundColor": isActive ? "rgba(43, 200, 190, 0.2)" : "transparent",
        "borderLeft": isActive
          ? "4px solid rgb(43, 200, 190)"
          : "4px solid transparent",
        "transition": "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(43, 200, 190, 0.3)", // ✅ Applique à tout l'élément
        },
        "width": "100%",
      }}
    >
      <ListItemIcon sx={{ color: isActive ? "rgb(43, 200, 190)" : "white" }}>
        {resource.icon && <resource.icon />}
      </ListItemIcon>
      <div>
        <ListItemText
          primary={resource.options?.label || name}
          sx={{ color: "inherit" }} // ✅ Garde la couleur blanche ou active
        />
      </div>
    </MenuItem>
  );
};

export const Menu: FC = () => {
  const [theme] = useTheme();
  const redirect = useRedirect();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: theme === "dark" ? "#121212" : "black",
        width: "256px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        color: "white",
        pt: 3,
        pl: 3,
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box
          sx={{
            mb: 2,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => redirect("/profile")}
        >
          <Avatar
            sx={{ width: "85px", height: "85px", mb: 1 }}
            src={profileImage}
          />
          <Typography sx={{ fontWeight: "bold" }}>Jey Vaninah</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Admin
          </Typography>
        </Box>

        <Box>
          <Box>
            <CustomMenuItem name="user" />
            <CustomMenuItem name="role" />
            <CustomMenuItem name="event" />
            <CustomMenuItem name="typeTicket" />
            <CustomMenuItem name="ticket" />
            <CustomMenuItem name="country" />
            <CustomMenuItem name="tag" />
            <CustomMenuItem name="newsletter" />
            <CustomMenuItem name="currency" />
            <CustomMenuItem name="host" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ "width": "100%", "& *": { color: "white" } }}>
        <Logout />
      </Box>
    </Box>
  );
};
