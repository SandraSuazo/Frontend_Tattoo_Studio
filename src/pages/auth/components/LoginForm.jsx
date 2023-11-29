import { Grid, TextField } from "@mui/material";

export const LoginForm = ({ isRegistering }) => {
  const textFieldGenerator = (id, type, label) => (
    <TextField
      required
      fullWidth
      id={id}
      type={type}
      label={label.toUpperCase()}
      name={id}
    />
  );

  return (
    <Grid container spacing={2}>
      {isRegistering && (
        <>
          <Grid item xs={12} sm={6}>
            {textFieldGenerator(
              "firstName",
              "text",
              "First Name",
              "given-name"
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {textFieldGenerator("lastName", "text", "Last Name", "family-name")}
          </Grid>
          <Grid item xs={12}>
            {textFieldGenerator("phone", "phone", "Phone", "phone")}
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        {textFieldGenerator("email", "email", "Email Address", "email")}
      </Grid>
      <Grid item xs={12}>
        {textFieldGenerator("password", "password", "Password", "new-password")}
      </Grid>
    </Grid>
  );
};
