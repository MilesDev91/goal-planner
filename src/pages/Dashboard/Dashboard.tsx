import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";

const dashboardOptions = [
  {
    name: "Home",
    link: "/dashboard",
  },
];

export default function Dashboard(): JSX.Element {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ minHeight: 30 }}>
          {dashboardOptions.map((option) => (
            <Link
              color="inherit"
              underline="none"
              key={option.name}
              to={option.link}
              component={RouterLink}
            >
              <Typography>{option.name}</Typography>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <PageContainer>
        <Grid container>
          <Grid item md={4} sm={0}></Grid>
          <Grid item md={8} sm={12}></Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
