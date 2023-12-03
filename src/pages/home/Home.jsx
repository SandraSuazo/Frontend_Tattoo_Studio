import { Box, Divider, Typography } from "@mui/material";
import { Carousel } from "./components/Carousel.jsx";
import { ImagesGallery } from "./components/ImageGallery.jsx";
import { Map } from "./components/Map.jsx";

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
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        style={{
          textAlign: "center",
        }}
      >
        Tras 10 años en el sector nos hemos convertido en uno de los{" "}
        <span style={{ color: "#ad9859" }}>estudios referentes en Madrid</span>{" "}
        tanto por la calidad de nuestros tatuadores como por la experiencia que
        se vive en nuestras instalaciones. En nuestro estudio apostamos por
        espacios amplios con cabinas espaciosas y abiertas donde los artistas
        comparten opiniones para lograr un{" "}
        <span style={{ color: "#ad9859" }}>resultado perfecto.</span>
      </Typography>
      <Carousel />
      <Divider sx={{ my: 2 }} />
      <Typography
        sx={{ my: 2, mx: 1 }}
        variant="h4"
        style={{
          color: "#ad9859",
        }}
      >
        Te asesoramos
      </Typography>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        style={{
          textAlign: "center",
        }}
      >
        Puedes reservar con nuestro equipo{" "}
        <span style={{ color: "#ad9859" }}>consultorías gratuitas</span> para
        hablar sobre tu idea de tatuaje y que estilo o tatuador es el ideal para
        llevarla a cabo. Así como cualquier duda sobre como venir preparado a tu
        cita. Trabajamos cada proyecto de{" "}
        <span style={{ color: "#ad9859" }}>manera personalizada,</span>{" "}
        adecuándonos a los gustos y preferencias de cada cliente.
      </Typography>
      <ImagesGallery />
      <Divider sx={{ my: 2 }} />
      <Typography
        sx={{ my: 2, mx: 1 }}
        variant="h4"
        style={{
          color: "#ad9859",
        }}
      >
        ¿Donde encontrarnos?
      </Typography>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        style={{
          textAlign: "center",
        }}
      >
        Nuestro estudio de tatuajes esta ubicado en el{" "}
        <span style={{ color: "#ad9859" }}>Edificio Talent Garden,</span> en la
        calle Juan de Mariana, 15, 28045 Madrid. Sumérgete en un ambiente
        creativo y acogedor donde cada rincón refleja nuestra pasión por el arte
        del tatuaje. Abierto todos los días para servirte, nuestro equipo de
        artistas te espera de{" "}
        <span style={{ color: "#ad9859" }}>09:00 a 21:00 horas.</span>
      </Typography>
      <Map />
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};
