import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup.string().min(3,"Please enter a valid first name").max(30, "maximum character exceeded").required("Required"),
  lastName: yup.string().min(3,"Please enter a valid last name").max(30, "maximum character exceeded").required("Required"),
  role: yup.string().oneOf(["customer", "vendor", "delivery agent"], "Invalid role"),
  address: yup.string().min(3,"Please enter a valid address").max(50, "maximum character exceeded").required("Required"),
  image: yup.string(),
  password: yup
    .string()
    .min(4)
    //.matches(passwordRules, { message: "Incorrect password format" })
    .required("Required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Required"),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });