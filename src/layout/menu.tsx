import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { FC } from "react";
import { Logout, useSidebarState } from "react-admin";
import { useRedirect, useResourceDefinition } from "react-admin";
import { useLocation } from "react-router-dom";
import { FlexBox } from "../common/components/flex-box";

const CustomMenuItem = ({ name }: { name: string }) => {
  const redirect = useRedirect();
  const resource = useResourceDefinition({ resource: name });
  const location = useLocation();
  const isActive = location.pathname.startsWith(`/${name}`);

  return (
    <MenuItem
      onClick={() => redirect(`/${name}`)}
      sx={{
        "marginBlock": "3px",
        "display": "flex",
        "alignItems": "center",
        "transition": "all 0.3s ease",
        "py": "10px",
        "width": "100%",
        "borderRadius": "8px",
        "backgroundColor": isActive ? "rgba(64, 224,208, .8)" : "transparent",
        "&:hover": {
          backgroundColor: isActive ? "rgba(64, 224,208, .8)" : "#d9dedb70",
        },
        "color": isActive ? "white" : "gray",
        "& *": {
          ".MuiSvgIcon-root": {
            color: isActive ? "white" : "gray",
          },
        },
      }}
    >
      <ListItemIcon
        sx={{ color: isActive ? "rgb(43, 200, 190)" : "white", width: "50px" }}
      >
        {resource.icon && <resource.icon />}
      </ListItemIcon>
      <div>
        <ListItemText
          primary={resource.options?.label || name}
          sx={{ color: "inherit" }}
        />
      </div>
    </MenuItem>
  );
};

export const Menu: FC = () => {
  const [isSiderBarOpen, setIsSiderBarOpen] = useSidebarState();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "white",
        overflowX: "hidden",
        width: isSiderBarOpen ? "250px" : "65px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        color: "white",
        px: isSiderBarOpen ? 2 : 0,
        pr: isSiderBarOpen ? 1 : "7px",
        transition: "all linear .2s",
        pl: isSiderBarOpen ? 1 : "5px",
      }}
    >
      <Box>
        <FlexBox
          sx={{
            "& *": { ".MuiSvgIcon-root": { color: "gray" } },
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "space-between",
            "borderBottom": `1px solid #d3e3d7`,
            "py": "18px",
            "px": 1,
            "gap": 1,
          }}
        >
          {isSiderBarOpen && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src="/logo-png.png" alt="Logo" style={{ width: "100px" }} />
            </Box>
          )}
          <IconButton onClick={() => setIsSiderBarOpen(!isSiderBarOpen)}>
            {!isSiderBarOpen ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        </FlexBox>
        <Box sx={{ pt: 2, width: "100%", textAlign: "center" }}>
          <Box>
            {isSiderBarOpen && (
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "start",
                  px: 2,
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                MAIN
              </Typography>
            )}
            <Box sx={{ pl: isSiderBarOpen ? "3px" : 0, mb: 5 }}>
              <CustomMenuItem name="event" />
              <CustomMenuItem name="ticket" />
              <CustomMenuItem name="user" />
            </Box>
            {isSiderBarOpen && (
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "start",
                  px: 2,
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                CONFIGURATION
              </Typography>
            )}
            <Box sx={{ pl: isSiderBarOpen ? "3px" : 0 }}>
              <CustomMenuItem name="role" />
              <CustomMenuItem name="typeTicket" />
              <CustomMenuItem name="country" />
              <CustomMenuItem name="tag" />
              <CustomMenuItem name="newsletter" />
              <CustomMenuItem name="currency" />
              <CustomMenuItem name="host" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          "width": "100%",
          "mb": 2,
          "& .MuiListItemText-root": {
            display: isSiderBarOpen ? undefined : "none",
          },
          "& *": { color: "red" },
        }}
      >
        <Logout color="error" sx={{ py: 2 }} />
      </Box>
    </Box>
  );
};
