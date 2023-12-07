import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { registerUser } from "../../services/userApiCalls";

export const Register = () => {
  const notify = (message) => toast.error(message);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleUserRegister = async (user) => {
    try {
      await registerUser(user);
      handleNavigate("/login");
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.firstName.value,
      surname: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserRegister(user);
  };

  return (
    <Grid container style={{ overflow: "hidden" }}>
      <Grid item xs={12} sm={6}>
        <Box
          style={{
            width: "auto",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src="src/assets/tattoo_studio/TattooStudioLogin.png"
            alt="Tattoo Studio"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          my: 16,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "#ad9859",
          }}
        >
          Registrarse
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <RegisterForm />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={() => handleNavigate("/login")}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
