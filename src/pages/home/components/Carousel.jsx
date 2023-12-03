import { Box, Paper } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlay = autoPlay(SwipeableViews);

const images = [
  {
    img: "src/assets/tattoo_studio/TattooStudio01.png",
  },
  {
    img: "src/assets/tattoo_studio/TattooStudio02.png",
  },
  {
    img: "src/assets/tattoo_studio/TattooStudio03.png",
  },
  {
    img: "src/assets/tattoo_studio/TattooStudio04.png",
  },
  {
    img: "src/assets/tattoo_studio/TattooStudio05.png",
  },
  {
    img: "src/assets/tattoo_studio/TattooStudio06.png",
  },
];

export const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <AutoPlay axis="x" index={activeStep} onChangeIndex={handleStepChange}>
        {images.map((step, index) => (
          <div key={index}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
              src={step.img}
              alt={`Studio photo: ${index + 1}`}
            />
          </div>
        ))}
      </AutoPlay>
    </Box>
  );
};
