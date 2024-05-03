import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Name"),
  email: Yup.string().email().required("please Enter valid email"),
  password: Yup.string().required("Please enter valid Password").min(6),
  conf_pass: Yup.string()
    .required("Please Enter password")
    .oneOf([Yup.ref("password"), null], "Password must Same"),
});
