import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Badge, Box, Avatar, Typography } from "@mui/material";
import { FC } from "react";
import { IconButtonWithTooltip, useSidebarState } from "react-admin";
import { useTheme } from "@mui/material/styles";
import { FlexBox } from "../common/components/flex-box";
import profileImage from "../assets/images/profile.png";

export const AppBar: FC = () => {
  const theme = useTheme();
  const [isSiderBarOpen] = useSidebarState();

  return (
    <Box
      sx={{
        "ml": isSiderBarOpen ? "250px" : "65px",
        "width": isSiderBarOpen ? "calc(100% - 250px)" : "calc(100% - 65px)",
        "transition": "linear .2s",
        "padding": "5px",
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
        "px": 5,
        "py": 2,
      }}
    >
      <FlexBox
        sx={{ width: "350px", bgcolor: "#f5f6f7", borderRadius: "15px", px: 2 }}
      >
        <input
          name="q"
          type="text"
          style={{
            flex: 1,
            outline: "none",
            border: "none",
            fontSize: "16px",
            padding: "12px 0px",
            backgroundColor: "transparent",
          }}
          placeholder="Search"
        />
        <SearchIcon />
      </FlexBox>
      <Box sx={{ display: "flex", gap: 3 }}>
        <IconButtonWithTooltip label="Notification">
          <Badge badgeContent={4} color="warning">
            <NotificationsIcon />
          </Badge>
        </IconButtonWithTooltip>
        <FlexBox sx={{ gap: 2 }}>
          <Avatar
            sx={{ width: "40px", height: "40px", mb: 1 }}
            src={profileImage}
          />
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Jey Vaninah</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              hei.vaninah@gmail.com
            </Typography>
          </Box>
        </FlexBox>
      </Box>
    </Box>
  );
};
