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
import { cleanAppointments } from "../../../core/appointmentSlice.js";

export const UserMenu = ({ token, userRole }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    if (anchorElUser) handleCloseUserMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleLogout = () => {
    if (anchorElUser) handleCloseUserMenu();
    dispatch(cleanUser());
    dispatch(cleanAppointments());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {token && userRole === "admin" && (
          <MenuItem onClick={() => handleNavigate("/admin/users")}>
            <Typography textAlign="center">Usuarios</Typography>
          </MenuItem>
        )}
        {token ? (
          <Box>
            <MenuItem onClick={() => handleNavigate("/profile")}>
              <Typography textAlign="center">Perfil</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={() => handleNavigate("/login")}>
            <Typography textAlign="center">Login</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
