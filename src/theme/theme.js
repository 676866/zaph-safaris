    import { createTheme } from "@mui/material/styles";

    const theme = createTheme({
      palette: {
        primary: {
          main: "#1E88E5", // Customize to your brand color
        },
        secondary: {
          main: "#FFB300",
        },
        background: {
          default: "#f9f9f9",
        },
      },
      typography: {
        fontFamily: "'Roboto', sans-serif",
      },
    });

    export default theme;
