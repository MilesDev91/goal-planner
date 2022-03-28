import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../../components/FormInput/FormInput";

export default function SignUpForm(): JSX.Element {
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(8, "Password is too short"),
      })}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="email"
            id="email"
            onChange={handleChange}
            helperText={touched.email ? errors.email : ""}
            value={values.email}
            autoComplete="email"
            fullWidth
          />
          <FormInput
            label="password"
            id="password"
            onChange={handleChange}
            helperText={touched.password ? errors.password : ""}
            value={values.password}
            autoComplete="password"
            fullWidth
          />

          <Box textAlign="center" mt={3}>
            <Button type="submit" size="large" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
