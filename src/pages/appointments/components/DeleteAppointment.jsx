import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../../../core/appointmentSlice.js";
import {
  deleteSession,
  getAppointments,
} from "../../../services/appointmentApiCalls.js";
import { userData } from "../../../core/userSlice.js";
import { toast } from "react-toastify";

export const DeleteAppointment = ({ appointmentId }) => {
  const notify = (message) => toast.error(message);
  const dispatch = useDispatch();
  const { token } = useSelector(userData);

  const handleDeleteAppointment = async () => {
    try {
      await deleteSession(appointmentId, token);
      const appointmentList = await getAppointments(token);
      dispatch(setAppointments(appointmentList));
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  return (
    <IconButton onClick={handleDeleteAppointment} color="inherit">
      <DeleteIcon />
    </IconButton>
  );
};
