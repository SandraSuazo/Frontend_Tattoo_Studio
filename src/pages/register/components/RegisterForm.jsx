import { Grid } from "@mui/material";
import { UserFormFields } from "../../../common/components/FormFields.jsx";

export const RegisterForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {UserFormFields({
            id: "firstName",
            type: "text",
            label: "Nombre",
            value: EventTarget.value,
            disabled: "false",
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {UserFormFields({
            id: "lastName",
            type: "text",
            label: "Apellido",
            value: EventTarget.value,
            disabled: "false",
          })}
        </Grid>
        <Grid item xs={12}>
          {UserFormFields({
            id: "phone",
            type: "phone",
            label: "Teléfono",
            value: EventTarget.value,
            disabled: "false",
          })}
        </Grid>
        <Grid item xs={12}>
          {UserFormFields({
            id: "email",
            type: "email",
            label: "Correo Electrónico",
            value: EventTarget.value,
            disabled: "false",
          })}
        </Grid>
        <Grid item xs={12}>
          {UserFormFields({
            id: "password",
            type: "password",
            label: "Contraseña",
            value: EventTarget.value,
            disabled: "false",
          })}
        </Grid>
      </Grid>
    </>
  );
};
