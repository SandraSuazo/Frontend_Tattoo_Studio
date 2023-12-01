import { Divider, Typography } from "@mui/material";
import { Carousel } from "./components/CarouselHome.jsx";

export const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Typography
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
    </div>
  );
};
