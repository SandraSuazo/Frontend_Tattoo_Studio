import { useEffect, useState } from "react";
import { setAppointments } from "../../core/appointmentSlice.js";
import { Box, Button, Typography } from "@mui/material";
import { getAppointments } from "../../services/appointmentApiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../core/userSlice.js";
import { appointmentData } from "../../core/appointmentSlice.js";
import { BasicTable } from "./components/AppointmentTable.jsx";
import { AppointmentModal } from "./components/AppointmentModal.jsx";
import { toast } from "react-toastify";

export const Appointments = () => {
  const notify = (message) => toast.error(message);
  const { token } = useSelector(userData);
  const { appointments } = useSelector(appointmentData);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const handleAppointmentList = async () => {
      try {
        const result = await getAppointments(token);
        dispatch(setAppointments(result));
      } catch (error) {
        notify(`${error.response.status}: ${error.response.data}`);
      }
    };

    handleAppointmentList();
  }, [dispatch, token]);

  return (
    <Box>
      <Typography variant="h4" style={{ color: "#ad9859" }}>
        Citas
      </Typography>
      {appointments.length > 0 ? (
        <BasicTable appointments={appointments} />
      ) : (
        <Typography>No hay citas</Typography>
      )}
      <Button onClick={handleOpenModal}>Pedir Cita</Button>
      <AppointmentModal open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};
