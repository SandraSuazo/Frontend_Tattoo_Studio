import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { userData } from "../../core/userSlice";

export const Profile = () => {
  const { token } = useSelector(userData);
  const { user } = useSelector(userData);

  return (
    <Box>
      {token ? (
        <>
          <Typography>Perfil:</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.surname}</Typography>
          <Typography>{user.email}</Typography>
          <Typography>{user.phone}</Typography>
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}
    </Box>
  );
};
