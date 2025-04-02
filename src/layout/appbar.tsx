import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Badge, Box, Avatar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { IconButtonWithTooltip, useLogout, useSidebarState } from "react-admin";
import { useTheme } from "@mui/material/styles";
import { FlexBox } from "../common/components/flex-box";
import { useNavigate } from 'react-router-dom';
import { useProfile } from "../config/useProfile";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AppBar: FC = () => {
  const theme = useTheme();
  const [isSiderBarOpen] = useSidebarState();
  const navigate = useNavigate();
  const user = useProfile();
  
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };
  
  const handleClickToProfile = () => {
    navigate('/profile');
    handleClose();
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Box >
          <Button onClick={handleClick} sx={{ textAlign: "left", minWidth: 0 }}>
            <FlexBox sx={{ gap: 2, alignItems: "center" }}>
              <Avatar sx={{ width: "40px", height: "40px" }} src={user?.imageUrl} />
              <Box>
                <Typography sx={{ fontWeight: "bold", textTransform: "none" }}>{user?.name}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, textTransform: "none" }}>
                  {user?.email}
                </Typography>
              </Box>
            </FlexBox>
          </Button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom', 
                horizontal: 'right', 
              }}
              transformOrigin={{
                vertical: 'top', 
                horizontal: 'right', 
              }}
              PaperProps={{
                sx: {
                  width: 200, 
                },
              }} >
            <MenuItem onClick={handleClickToProfile}>
              <AccountCircleIcon sx={{ marginRight: 1, color:"rgba(64, 224,208, .8)" }} />
              Profil
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SettingsIcon sx={{ marginRight: 1, color:"rgba(64, 224,208, .8)" }} />
              Paramètres
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ExitToAppIcon sx={{ marginRight: 1, color:"rgba(64, 224,208, .8)" }} />
            Déconnexion
          </MenuItem>
            </Menu>
        </Box>
      </Box>
    </Box>
  );
};
