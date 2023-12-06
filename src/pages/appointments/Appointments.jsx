import { useEffect, useState } from "react";
import { setAppointments } from "../../core/appointmentSlice.js";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { getAppointments } from "../../services/appointmentApiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../core/userSlice.js";
import { appointmentData } from "../../core/appointmentSlice.js";
import { AppointmentTable } from "./components/AppointmentTable.jsx";
import { AppointmentModal } from "./components/AppointmentModal.jsx";
import { toast } from "react-toastify";

export const Appointments = () => {
  const notify = (message) => toast.error(message);
  const dispatch = useDispatch();
  const { token } = useSelector(userData);
  const { appointments } = useSelector(appointmentData);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => {
    setModalOpen(false), handleAppointmentList();
  };

  const handleAppointmentList = () => {
    getAppointments(token)
      .then((appointments) => {
        dispatch(setAppointments(appointments));
      })
      .catch((error) =>
        notify(`${error.response.status}: ${error.response.data}`)
      );
  };

  useEffect(() => {
    handleAppointmentList();
  }, [appointments]);

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
          Citas
        </Typography>
        <Button variant="contained" type="submit" onClick={handleOpenModal}>
          Pedir Cita
        </Button>
      </Box>
      <AppointmentTable appointments={appointments} />
      <AppointmentModal
        open={modalOpen}
        handleClose={handleCloseModal}
        isCreating={true}
      />
    </Container>
  );
};
