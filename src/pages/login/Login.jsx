import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginForm } from "./components/LoginForm.jsx";
import { loginUser } from "../../services/userApiCalls.js";
import { setToken, setUser } from "../../core/userSlice.js";

export const Login = () => {
  const notify = (message) => toast.error(message);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleUserLogin = async (user) => {
    try {
      await loginUser(user).then(({ data }) => {
        dispatch(setUser(data.user));
        dispatch(setToken(data.token));
        handleNavigate("/");
      });
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserLogin(user);
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
        sm={6}
        sx={{
          my: 20,
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
              <Button onClick={() => handleNavigate("/register")}>
                ¿No tienes una cuenta? Regístrate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
