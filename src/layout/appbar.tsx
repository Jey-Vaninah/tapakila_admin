import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { FC } from "react";
import {
  IconButtonWithTooltip,
  ToggleThemeButton,
  useTheme,
} from "react-admin";

export const AppBar: FC = () => {
  const [theme] = useTheme();
  return (
    <Box
      sx={{
        "ml": "300px",
        "width": "calc(100%-300px)",
        "bgcolor": theme === "dark" ? "black" : "rgb(20, 61, 24)",
        "color": "white",
        "& *:not(.RaMenuItemLink-active)": { color: "white !important" },
        "& .RaMenuItemLink-active": { color: "rgb(20, 229, 41) !important" },
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "p": 1,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
        }}
      >
        Tapakila
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          sx={{ width: "300px" }}
          name="q"
          variant="outlined"
          label="Search"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButtonWithTooltip label="Notification">
          {" "}
          <NotificationsIcon />
        </IconButtonWithTooltip>
        <ToggleThemeButton />
      </Box>
    </Box>
  );
};
