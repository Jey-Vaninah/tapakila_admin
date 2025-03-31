import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Menu } from "./menu";
import { AppBar } from "./appbar";
import { useSidebarState } from "react-admin";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSiderBarOpen] = useSidebarState();
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
      <Box
        sx={{
          "width": isSiderBarOpen ? "calc(100% - 300px)" : "calc(100% - 65px)",
          "ml": isSiderBarOpen ? "300px" : "65px",
          "transition": "all linear .2s",
          "py": 2,
          "pr": 3,
          "px": isSiderBarOpen ? undefined : 2,
          "& .list-page": {
            bgcolor: "transparent",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
