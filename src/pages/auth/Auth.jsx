import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LoginForm } from "../auth/components/LoginForm";
import { useAuth } from "../auth/components/useAuth.js";

export const Auth = () => {
  const { handleSubmit, isRegistering, setIsRegistering } = useAuth();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <img
            src="src/assets/tattoo_logo/Logo_Studio_Tattoo.png"
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <LoginForm isRegistering={isRegistering} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
