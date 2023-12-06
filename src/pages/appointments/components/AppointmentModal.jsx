import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createAppointment,
  updateAppointment,
} from "../../../services/appointmentApiCalls.js";
import { userData } from "../../../core/userSlice.js";
import { toast } from "react-toastify";
import { AppointmentForm } from "./AppointmentForm.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AppointmentModal = ({
  open,
  handleClose,
  isCreating,
  appointmentId,
}) => {
  const notify = (message) => toast.error(message);
  const dispatch = useDispatch();
  const { token } = useSelector(userData);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    intervention: "",
    tattooArtist: "",
  });

  const handleCreateAppointment = () => {
    createAppointment(formData, token)
      .then(handleClose())
      .catch((error) =>
        notify(`${error.response.status}: ${error.response.data}`)
      );
  };

  const handleModifyAppointment = () => {
    updateAppointment(appointmentId, formData, token)
      .then(handleClose())
      .catch((error) =>
        notify(`${error.response.status}: ${error.response.data}`)
      );
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
            }}
            style={{
              color: "#ad9859",
            }}
          >
            {isCreating ? "Agendar nueva cita" : "Modificar cita"}
          </Typography>
          <AppointmentForm formData={formData} setFormData={setFormData} />
          {isCreating ? (
            <Button
              onClick={handleCreateAppointment}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
          ) : (
            <Button
              onClick={handleModifyAppointment}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Modificar
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
};
