import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    highlight: {
      main: "#027fd133",
      light: "#027fd117",
    },
    grayed: {
      main: "#e5e5e5",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Open Sans', 'sans-serif'",
    fontSize: 12,
  },
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    highlight: PaletteOptions["primary"];
    grayed: PaletteOptions["primary"];
  }
}
