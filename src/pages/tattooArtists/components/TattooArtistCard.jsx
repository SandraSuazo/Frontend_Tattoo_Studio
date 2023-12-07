import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const tattooArtistsData = [
  {
    image: "src/assets/tattoo_artist/Artist_Alan.png",
    name: "Alan",
    surname: "Hermoso",
    phone: "658459658",
    email: "alan.hermoso@example.com",
  },
  {
    image: "src/assets/tattoo_artist/Artist_Debora.png",
    name: "Debora",
    surname: "Sanchez",
    phone: "637082522",
    email: "debora.sanchez@example.com",
  },
  {
    image: "src/assets/tattoo_artist/Artist_John.png",
    name: "John",
    surname: "Smith",
    phone: "637902522",
    email: "john.smith@example.com",
  },
  {
    image: "src/assets/tattoo_artist/Artist_Claudia.png",
    name: "Claudia",
    surname: "Madrigal",
    phone: "637402522",
    email: "claudia.madrigal@example.com",
  },
  {
    image: "src/assets/tattoo_artist/Artist_Mute.png",
    name: "Mute",
    surname: "Acosta",
    phone: "637972522",
    email: "mute.acosta@example.com",
  },
];

export const TattooArtistCard = () => {
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
