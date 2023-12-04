import React from "react";
import { TextField } from "@mui/material";

export const UserFormFields = ({
  id,
  type,
  label,
  value,
  onChange,
  disabled,
}) => (
  <TextField
    required
    fullWidth
    id={id}
    name={id}
    type={type}
    label={label.toUpperCase()}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    disabled={!disabled}
  />
);

export const AppointmentFormFields = () => {
  return <div></div>;
};
