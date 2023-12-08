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

export const getAllAppointment = async (token) => {
  const result = await axios.get(`${appointmentURL}/list-all-appointments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const updateAppointment = async (sessionId, updatedData, token) => {
  const result = await axios.patch(
    `${appointmentURL}/update-session/${sessionId}`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const deleteSession = async (sessionId, token) => {
  const result = await axios.delete(`${appointmentURL}/delete/${sessionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
