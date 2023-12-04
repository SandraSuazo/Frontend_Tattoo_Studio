import React, { useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userData, setUser } from "../../core/userSlice";
import { modifyProfileUser } from "../../services/userApiCalls";
import { toast } from "react-toastify";
import { EditProfileForm } from "./components/EditProfileForm";

export const Profile = () => {
  const notify = (message) => toast.error(message);
  const { token, user } = useSelector(userData);
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    phone: user.phone,
    email: user.email,
    password: "",
  });

  const handleEditButton = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
    if (!isEditMode) {
      setFormData({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };

  const handleEditProfile = async () => {
    try {
      const result = await modifyProfileUser(formData, token);
      dispatch(setUser({ user: result.data.user }));
      setIsEditMode(false);
    } catch (error) {
      notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  // const handleDeleteProfile = async () => {
  //   try {
  //     await deactivateUser(user._id, token);
  //     dispatch(cleanUser());
  //     handleNavigate("/");
  //   } catch (error) {
  //     notify(`${error.response.status}: ${error.response.data}`);
  //   }
  // };

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
        <Typography
          variant="h4"
          style={{
            color: "#ad9859",
          }}
        >
          Perfil
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <EditProfileForm
            formData={formData}
            setFormData={setFormData}
            isEditMode={isEditMode}
          />
        </Box>
        {!isEditMode ? (
          <Button
            fullWidth
            variant="contained"
            onClick={handleEditButton}
            sx={{ mt: 3 }}
          >
            Modificar Perfil
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            onClick={handleEditProfile}
            sx={{ mt: 3 }}
          >
            Guardar Cambios
          </Button>
        )}
      </Box>
    </Container>
  );
};
