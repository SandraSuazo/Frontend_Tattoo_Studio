import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const TattooArtistCard = ({ tattooArtistsData }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      {tattooArtistsData.map((artist, index) => (
        <Card key={index} sx={{ minWidth: 275, marginBottom: "20px" }}>
          <CardContent>
            <img
              src={artist.image}
              alt={`${artist.name} ${artist.surname}`}
              style={{ width: "100%" }}
            />
            <Typography variant="h5" component="div">
              {artist.name} {artist.surname}
            </Typography>
            <Typography color="text.secondary">
              Teléfono: {artist.phone}
            </Typography>
            <Typography color="text.secondary">
              Email: {artist.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
