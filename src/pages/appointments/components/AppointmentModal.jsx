import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../../services/appointmentApiCalls.js";
import { setAppointments } from "../../../core/appointmentSlice.js";
import { userData } from "../../../core/userSlice.js";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AppointmentModal = ({ open, handleClose }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateAppointment = async () => {
    try {
      const result = await createAppointment(formData, token);
      dispatch(setAppointments(result));
      handleClose();
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agendar nueva cita
          </Typography>
          <TextField
            required
            fullWidth
            id="date"
            name="date"
            type="date"
            label="Fecha"
            value={formData.date}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            id="startTime"
            name="startTime"
            type="text"
            label="Hora de inicio"
            value={formData.startTime}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            id="endTime"
            name="endTime"
            type="text"
            label="Hora de fin"
            value={formData.endTime}
            onChange={handleInputChange}
          />
          <FormControl fullWidth>
            <InputLabel id="intervention-label">Intervención</InputLabel>
            <Select
              labelId="intervention-label"
              id="intervention"
              name="intervention"
              value={formData.intervention}
              label="Intervención"
              onChange={handleInputChange}
            >
              <MenuItem value="tattoo">Tatuaje</MenuItem>
              <MenuItem value="piercing">Piercing</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="tattoo-artist-label">Tatuador</InputLabel>
            <Select
              labelId="tattoo-artist-label"
              id="tattoo-artist"
              name="tattooArtist"
              value={formData.tattooArtist}
              label="Tatuador"
              onChange={handleInputChange}
            >
              <MenuItem value="656785833077201729c163f7">Alan Hermoso</MenuItem>
              <MenuItem value="656785ad3077201729c163fa">
                Claudia Madrigal
              </MenuItem>
              <MenuItem value="656785c93077201729c163fd">
                Debora Sanchez
              </MenuItem>
              <MenuItem value="656785e43077201729c16400">John Smith</MenuItem>
              <MenuItem value="6567865a3077201729c16403">Mute Acosta</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleCreateAppointment}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
