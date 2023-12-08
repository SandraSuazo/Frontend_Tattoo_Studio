import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { userData } from "../../core/userSlice.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getUsersByRole } from "../../services/userApiCalls.js";
import { UserAdminTable } from "./components/UserAdminTable.jsx";

export const Admin = () => {
  const notify = (message) => toast.error(message);
  const { token } = useSelector(userData);
  const [selectedRole, setSelectedRole] = useState("");
  const [users, setUsers] = useState([]);

  const handleUserList = (role) => {
    getUsersByRole(role, token)
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        notify(`${error?.response?.status}: ${error?.response?.data}`);
        setUsers([]);
      });
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    handleUserList(role);
  };

  return (
    <Container component="main" maxWidth="s">
      <Box
        sx={{
          mx: 4,
          my: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" style={{ color: "#ad9859" }}>
          ¿Qué rol quieres mostrar?
        </Typography>
        <FormControl>
          <InputLabel id="role-select-label">Rol</InputLabel>
          <Select
            sx={{ minWidth: "10em" }}
            id="role-select"
            value={selectedRole}
            label="Rol"
            onChange={handleRoleChange}
          >
            <MenuItem value="customer">Clientes</MenuItem>
            <MenuItem value="tattooArtist">Tatuadores</MenuItem>
            <MenuItem value="admin">Administradores</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <UserAdminTable users={users} setUsers={setUsers} token={token} />
    </Container>
  );
};
