import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const AppointmentAdminTable = ({ appointments }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              FECHA
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              HORA INICIO
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              HORA FIN
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              INTERVENCIÓN
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              CLIENTE
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              TATUADOR
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment._id}>
              <TableCell component="th" scope="row" align="center">
                {new Date(appointment.date).toLocaleDateString()}
              </TableCell>
              <TableCell align="center">{appointment.startTime}</TableCell>
              <TableCell align="center">{appointment.endTime}</TableCell>
              <TableCell align="center">
                {appointment.intervention === "tattoo" ? "Tatuaje" : "Piercing"}
              </TableCell>
              <TableCell align="center">{`${appointment.customer.name} ${appointment.customer.surname}`}</TableCell>
              <TableCell align="center">{`${appointment.tattooArtist.name} ${appointment.tattooArtist.surname}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
