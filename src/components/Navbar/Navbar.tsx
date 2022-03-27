import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Goal Planner
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Navbar };
