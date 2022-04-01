import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import Calendar from "./Calendar/Calendar";

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
        <Routes>
          <Route path="/dashboard" element={<Calendar />} />
        </Routes>
      </PageContainer>
    </>
  );
}
