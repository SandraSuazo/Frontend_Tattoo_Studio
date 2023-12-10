import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { AppointmentAdminTable } from "./components/AppointmentAdminTable";
import { getAllAppointment } from "../../services/appointmentApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../core/userSlice";
import { toast } from "react-toastify";
import { CustomPagination } from "../../common/Pagination";

export const AdminAppointments = () => {
  const notify = (message) => toast.error(message);
  const { token } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchAppointments = async () => {
    try {
      const allAppointments = await getAllAppointment(token, page, pageSize);
      setAppointments(allAppointments);
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchAppointments();
  }, [page]);

  return (
    <>
      <Container component="main" maxWidth="s">
        <Typography
          variant="h4"
          style={{ color: "#ad9859" }}
          sx={{
            mx: 4,
            my: 2,
          }}
        >
          Citas
        </Typography>
        <AppointmentAdminTable appointments={appointments} />
        <CustomPagination count={4} page={page} onChange={handlePageChange} />
      </Container>
    </>
  );
};
