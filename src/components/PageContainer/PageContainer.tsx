import React from "react";
import { Box } from "@mui/material";

interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "40px auto",
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
