import { Box, Link, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { FormikHelpers } from "formik";
import AuthPageWrapper from "../../components/AuthPageWrapper/AuthPageWrapper";
import PageContainer from "../../components/PageContainer/PageContainer";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function SignUp(): JSX.Element {
  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => {
    console.log(email, password);
    setSubmitting(false);
  };

  return (
    <PageContainer>
      <AuthPageWrapper>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Sign Up
        </Typography>
        <AuthForm handleSubmit={handleSubmit} />
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography>
            Already have an account?{" "}
            <Link to="/login" component={RouteLink}>
              Login
            </Link>
          </Typography>
        </Box>
      </AuthPageWrapper>
    </PageContainer>
  );
}
