import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

// Moiz Added this
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { fontFamily: "Roboto, Helvetica, Arial, sans-serif" },
        }}
      />
      <BrowserRouter>
        {/* ✅ Wrap App in AppProvider here */}
        <AppProvider>
          <App />
        </AppProvider> 
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
