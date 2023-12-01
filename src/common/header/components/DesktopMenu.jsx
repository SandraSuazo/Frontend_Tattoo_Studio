import React from "react";
import { Box, Button } from "@mui/material";

export const DesktopMenu = ({ token, handleNavigate }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {token && (
        <Button
          onClick={() => handleNavigate("/appointments")}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Citas
        </Button>
      )}
      <Button
        onClick={() => handleNavigate("/tattooArtists")}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Tatuadores
      </Button>
    </Box>
  );
};
