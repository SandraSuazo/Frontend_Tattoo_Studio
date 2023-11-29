// import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./core/store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const persistor = persistStore(store);

const theme = createTheme({
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
