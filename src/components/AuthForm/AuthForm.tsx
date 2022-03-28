import { Box, Button } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput/FormInput";

interface AuthFormProps {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => void;
}

export default function SignUpForm({
  handleSubmit,
}: AuthFormProps): JSX.Element {
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
            value={values.email}
            autoComplete="email"
            fullWidth
          />
          <FormInput
            label="password"
            id="password"
            onChange={handleChange}
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
