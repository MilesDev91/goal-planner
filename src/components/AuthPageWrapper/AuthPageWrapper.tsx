import { Box, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthPageWrapper: React.FC<Props> = ({ children }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  });

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 1000,
        minHeight: 700,
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: windowWidth < 600 ? "none" : 4,
        padding: windowWidth < 600 ? 0 : 10,
      }}
    >
      <Box sx={{ width: 350, margin: "0 auto" }}>{children}</Box>
    </Box>
  );
};

export default AuthPageWrapper;
