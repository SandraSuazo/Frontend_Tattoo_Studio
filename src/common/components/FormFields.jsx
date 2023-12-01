import React from "react";
import { TextField } from "@mui/material";

export const UserFormFields = ({ id, type, label }) => (
  <TextField
    required
    fullWidth
    id={id}
    name={id}
    type={type}
    label={label.toUpperCase()}
  />
);

export const AppointmentFormFields = () => {
  return <div></div>;
};
