import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomInput, Wrapper, CommonButton } from "../index";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const SignupForm = () => {
  const { isRegistering, register } = useAuthContext();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSignup = (values) => {
    console.log("Signup submitted", values);
    register(values);
  };

  return (
    <Wrapper className="py-12">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Create Account
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form className="space-y-5">
              <CustomInput
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                showPasswordToggle
                error={touched.password && errors.password}
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                showPasswordToggle
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <CommonButton
                disabled={isRegistering}
                type="submit"
                variant="primary"
                size="md"
                fullWidth
              >
                {isRegistering ? "Signing ...." : "Sign Up"}
              </CommonButton>
            </Form>
          )}
        </Formik>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignupForm;
