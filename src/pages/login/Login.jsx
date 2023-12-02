import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginForm } from "./components/LoginForm.jsx";
import { loginUser } from "../../services/apiCalls.js";
import { setToken, setUser } from "../../core/userSlice.js";
import { handleNavigate } from "../../common/handleNavigate.js";

export const Login = () => {
  const notify = (message) => toast(message);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserLogin(user);
  };

  const handleUserLogin = async (user) => {
    try {
      await loginUser(user).then(({ data }) => {
        dispatch(setUser(data.user));
        dispatch(setToken(data.token));
        handleNavigate(navigate, "/");
      });
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 12,
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
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <LoginForm />
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
              <Button onClick={() => handleNavigate(navigate, "/register")}>
                ¿No tienes una cuenta? Regístrate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
