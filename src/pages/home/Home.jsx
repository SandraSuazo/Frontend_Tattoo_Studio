import { Box, Divider, Typography } from "@mui/material";
import { Carousel } from "./components/CarouselHome.jsx";

export const Home = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Typography
        sx={{ my: 2 }}
        variant="h2"
        style={{
          color: "#ad9859",
          textAlign: "center",
        }}
      >
        Ink Addict Tattoo Studio
      </Typography>
      <Carousel />
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};
