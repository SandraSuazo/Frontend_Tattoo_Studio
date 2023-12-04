import { Grid } from "@mui/material";
import { UserFormFields } from "../../../common/components/FormFields.jsx";

export const LoginForm = () => {
  return (
    <>
      <Grid container spacing={2}>
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
