import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanUser } from "../../../core/userSlice.js";

export const UserMenu = ({ token, userRole }) => {
  const navigate = useNavigate();
  const [anchorUser, setAnchorUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (e) => {
    setAnchorUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  const handleNavigate = (path) => {
    if (anchorUser) handleCloseUserMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleLogout = () => {
    if (anchorUser) handleCloseUserMenu();
    dispatch(cleanUser());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchor={anchorUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorUser)}
        onClose={handleCloseUserMenu}
      >
        {token && userRole === "admin" && (
          <MenuItem onClick={() => handleNavigate("/admin")}>
            <Typography textAlign="center">Admin</Typography>
          </MenuItem>
        )}
        {token ? (
          <Box>
            <MenuItem onClick={() => handleNavigate("/profile")}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={() => handleNavigate("/auth")}>
            <Typography textAlign="center">Auth</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
