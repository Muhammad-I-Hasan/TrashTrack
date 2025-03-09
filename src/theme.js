import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: "#4CAF50", // Green color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#4CAF50", // Default green background
          color: "#fff", // White text color
          "&:hover": {
            backgroundColor: "#388E3C", // Darker green on hover
          },
        },
      },
    },
  },
});

export default theme;
