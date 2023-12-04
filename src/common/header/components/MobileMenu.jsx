import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

export const MobileMenu = ({
  token,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  handleNavigate,
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpenNavMenu}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {token && (
          <MenuItem onClick={() => handleNavigate("/appointments")}>
            <Typography textAlign="center">Citas</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={() => handleNavigate("/tattooArtists")}>
          <Typography textAlign="center">Tatuadores</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
