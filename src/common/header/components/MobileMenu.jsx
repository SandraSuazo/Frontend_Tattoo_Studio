import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

export const MobileMenu = ({
  token,
  anchorNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  handleNavigate,
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchor={anchorNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {token && (
          <MenuItem onClick={() => handleNavigate("/appointments")}>
            <Typography textAlign="center">Appointments</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={() => handleNavigate("/about")}>
          <Typography textAlign="center">About</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
