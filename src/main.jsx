import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./core/store.js";
import { theme } from "./common/theme.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./index.css";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer autoClose={3000} closeOnClick theme="dark" />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
