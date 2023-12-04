import { Grid } from "@mui/material";
import { UserFormFields } from "../../../common/components/FormFields";

export const EditProfileForm = ({ formData, setFormData, isEditMode }) => {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {UserFormFields({
            id: "firstName",
            type: "text",
            label: "Nombre",
            value: formData.name,
            onChange: (value) => handleChange("name", value),
            disabled: isEditMode,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {UserFormFields({
            id: "lastName",
            type: "text",
            label: "Apellido",
            value: formData.surname,
            onChange: (value) => handleChange("surname", value),
            disabled: isEditMode,
          })}
        </Grid>
        <Grid item xs={12}>
          {UserFormFields({
            id: "phone",
            type: "phone",
            label: "Teléfono",
            value: formData.phone,
            onChange: (value) => handleChange("phone", value),
            disabled: isEditMode,
          })}
        </Grid>
        <Grid item xs={12}>
          {UserFormFields({
            id: "email",
            type: "email",
            label: "Correo Electrónico",
            value: formData.email,
            onChange: (value) => handleChange("email", value),
            disabled: isEditMode,
          })}
        </Grid>
        {isEditMode && (
          <Grid item xs={12}>
            {UserFormFields({
              id: "password",
              type: "password",
              label: "Contraseña",
              value: formData.password,
              onChange: (value) => handleChange("password", value),
              disabled: isEditMode,
            })}
          </Grid>
        )}
      </Grid>
    </>
  );
};
