import { useEffect } from "react";
import { setAppointments } from "../../core/appointmentSlice.js";
import { Box, Typography } from "@mui/material";
import { getAppointments } from "../../services/appointmentApiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../core/userSlice.js";
import { appointmentData } from "../../core/appointmentSlice.js";

export const Appointments = () => {
  const { token } = useSelector(userData);
  const { appointments } = useSelector(appointmentData);
  const dispatch = useDispatch();

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
      {token ? (
        <>
          {appointments.map((appointment, index) => (
            <div key={index}>
              <Typography>{appointment.startTime}</Typography>
              <Typography>{appointment.endTime}</Typography>
              <Typography>{appointment.intervention}</Typography>
              <Typography>{appointment.tattooArtist}</Typography>
            </div>
          ))}
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}
    </Box>
  );
};
