import axios from "axios";

const appointmentURL = "http://localhost:3000/appointment";

export const createAppointment = async (newAppointment, token) => {
  const result = await axios.post(`${appointmentURL}`, newAppointment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const getAppointments = async (token) => {
  const result = await axios.get(`${appointmentURL}/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
