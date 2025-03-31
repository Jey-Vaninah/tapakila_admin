import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Menu } from "./menu";
import { AppBar } from "./appbar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        bgcolor: "#f9fafb",
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
