import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Menu } from "./menu";
import { AppBar } from "./appbar";
import { useTheme } from "react-admin";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        bgcolor: theme === "dark" ? "#383838" : "#f3f3f3",
      }}
    >
      <Menu />
      <AppBar />
      <Box sx={{ width: "calc(100% - 300px)", ml: "300px", p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
