import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

// ✅ Import your context provider
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
          body: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' },
        }} />
      <HashRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
);