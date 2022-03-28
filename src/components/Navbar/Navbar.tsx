import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Goal Planner
          </Typography>
          <Button onClick={() => navigate("/login")} color="inherit">
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Navbar };
