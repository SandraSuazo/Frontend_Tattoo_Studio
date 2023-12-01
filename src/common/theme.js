import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, roboto, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ad9859",
    },
    secondary: {
      main: "#ad9859",
    },
    background: {
      default: "#161616",
      paper: "#000000",
    },
  },
});
