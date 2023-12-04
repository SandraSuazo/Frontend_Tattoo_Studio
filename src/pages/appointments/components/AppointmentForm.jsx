import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

export const AppointmentForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="startTime"
            name="startTime"
            type="text"
            label="Hora de inicio"
            value={formData.startTime}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="endTime"
            name="endTime"
            type="text"
            label="Hora de fin"
            value={formData.endTime}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="intervention-label">Intervención</InputLabel>
            <Select
              labelId="intervention-label"
              id="intervention"
              name="intervention"
              value={formData.intervention}
              label="Intervención"
              onChange={handleInputChange}
            >
              <MenuItem value="tattoo">Tatuaje</MenuItem>
              <MenuItem value="piercing">Piercing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="tattoo-artist-label">Tatuador</InputLabel>
            <Select
              labelId="tattoo-artist-label"
              id="tattoo-artist"
              name="tattooArtist"
              value={formData.tattooArtist}
              label="Tatuador"
              onChange={handleInputChange}
            >
              <MenuItem value="656785833077201729c163f7">Alan Hermoso</MenuItem>
              <MenuItem value="656785ad3077201729c163fa">
                Claudia Madrigal
              </MenuItem>
              <MenuItem value="656785c93077201729c163fd">
                Debora Sanchez
              </MenuItem>
              <MenuItem value="656785e43077201729c16400">John Smith</MenuItem>
              <MenuItem value="6567865a3077201729c16403">Mute Acosta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
