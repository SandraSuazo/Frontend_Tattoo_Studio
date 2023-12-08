import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { deleteUser } from "../../../services/userApiCalls";

export const UserAdminTable = ({ users, setUsers, token }) => {
  const notify = (message) => toast.error(message);
  const handleDeleteUser = (userId) => {
    deleteUser(userId, token)
      .then(() => {
        const userList = users.filter((user) => user._id !== userId);
        setUsers(userList);
      })
      .catch((error) => {
        notify(`${error?.response?.status}: ${error?.response?.data}`);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              NOMBRE
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              APELLIDO
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              TELÉFONO
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              EMAIL
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell component="th" scope="row" align="center">
                {user.name}
              </TableCell>
              <TableCell align="center">{user.surname}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="inherit"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
