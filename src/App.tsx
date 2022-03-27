import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { theme } from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
