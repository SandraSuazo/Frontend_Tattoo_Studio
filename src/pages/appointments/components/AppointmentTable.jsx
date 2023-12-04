import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const BasicTable = ({ appointments }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="left">Inicio</TableCell>
            <TableCell align="left">Fin</TableCell>
            <TableCell align="left">Intervención</TableCell>
            <TableCell align="left">Tatuador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {new Date(appointment.date).toLocaleDateString()}
              </TableCell>
              <TableCell align="left">{appointment.startTime}</TableCell>
              <TableCell align="left">{appointment.endTime}</TableCell>
              <TableCell align="left">
                {appointment.intervention === "tattoo" ? "Tatuaje" : "Piercing"}
              </TableCell>
              <TableCell align="left">{`${appointment.tattooArtist.name} ${appointment.tattooArtist.surname}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
