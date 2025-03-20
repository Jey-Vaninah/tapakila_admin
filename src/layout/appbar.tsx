import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Settings,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { IconButtonWithTooltip, ToggleThemeButton } from "react-admin";
import { useTheme } from "@mui/material/styles";

export const AppBar: FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        "ml": "256px",
        "width": "calc(100% - 256px)",
        "bgcolor":
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "rgb(255, 255, 255)",
        "color": "black",
        "& *:not(.RaMenuItemLink-active)": { color: "black !important" },
        "& .RaMenuItemLink-active": {
          color: theme.palette.primary.main + " !important",
        },
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "position": "sticky",
        "top": 0,
        "zIndex": theme.zIndex.appBar,
        "p": 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src="/src/assets/images/logo-png.png"
          alt="Logo"
          style={{ height: "60px" }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          sx={{ width: "300px" }}
          name="q"
          variant="outlined"
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButtonWithTooltip label="Notification">
          <NotificationsIcon />
        </IconButtonWithTooltip>

        <IconButtonWithTooltip label="Setting">
          <Settings />
        </IconButtonWithTooltip>

        {/* <ToggleThemeButton /> */}
      </Box>
    </Box>
  );
};
