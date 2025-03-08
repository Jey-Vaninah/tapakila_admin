import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { IconButtonWithTooltip, ToggleThemeButton } from "react-admin";

export const AppBar: FC = () => {
  return (
    <Box
      sx={{
        width: "calc(100%-300px)",
        bgcolor: "black",
        ml: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          bgcolor: "black",
          fontSize: "1.3rem",
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
