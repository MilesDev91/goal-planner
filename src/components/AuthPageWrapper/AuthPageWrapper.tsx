import { Box, Paper } from "@mui/material";
import React from "react";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";

interface Props {
  children: React.ReactNode;
}

const AuthPageWrapper: React.FC<Props> = ({ children }: Props) => {
  const windowWidth = useWindowWidth(window);

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 1000,
        minHeight: 700,
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: windowWidth && windowWidth < 600 ? "none" : 4,
        padding: windowWidth && windowWidth < 600 ? 0 : 10,
      }}
    >
      <Box sx={{ width: 350, margin: "0 auto" }}>{children}</Box>
    </Box>
  );
};

export default AuthPageWrapper;
