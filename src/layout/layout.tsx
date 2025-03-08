import { Box, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { Menu } from "./menu";
import { AppBar } from "./appbar";

const LAYOUT_SX: SxProps = {
  width: "100%",
  height: "100vh",
  overflowY: "scroll",
  bgcolor: "#383838",
};

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={LAYOUT_SX}>
      <Menu />
      <AppBar />
      <Box sx={{ width: "calc(100% - 300px)", ml: "300px", p: 2 }}>
        {children}{" "}
      </Box>
    </Box>
  );
};
