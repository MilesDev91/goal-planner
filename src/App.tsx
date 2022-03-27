import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { theme } from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
