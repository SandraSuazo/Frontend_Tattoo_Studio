import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { AppointmentAdminTable } from "./components/AppointmentAdminTable";
import { getAllAppointment } from "../../services/appointmentApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../core/userSlice";
import { toast } from "react-toastify";

export const AdminAppointments = () => {
  const notify = (message) => toast.error(message);
  const { token } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const allAppointments = await getAllAppointment(token);
      setAppointments(allAppointments);
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <Typography variant="h4" style={{ color: "#ad9859" }}>
        Citas
      </Typography>
      <AppointmentAdminTable appointments={appointments} />;
    </>
  );
};
