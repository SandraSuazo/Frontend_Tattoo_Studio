import { Box, Paper, useTheme } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "src/assets/tattoo_studio/TattooStudio01.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/TattooStudio02.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/Piercing01.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/TattooStudio03.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/TattooStudio04.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/Piercing02.png",
  },
  {
    imgPath: "src/assets/tattoo_studio/TattooStudio06.png",
  },
];

export const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Paper
        square
        elevation={0}
        sx={{
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  overflow: "hidden",
                  width: "100%",
                  height: "70vh",
                  objectFit: "cover",
                  filter: " brightness(0.7)",
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};
