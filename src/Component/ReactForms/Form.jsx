import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "./Schemas/Index";
const initialValues = {
  name: "",
  email: "",
  password: "",
  conf_pass: "",
};
const Form = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log("errors", errors);

  return (
    <div className="flex justify-center  items-center flex-col">
      <h3>Form</h3>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
        <div className="input-block  ">
          <label htmlFor="name" className="input-label">
            Name:
          </label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            id="name"
            placeholder="Enter Name"
          />
          {errors.name && touched.name ? (
            <div className="text-[10px] text-red-300">{errors.name}</div>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          {errors.email && touched.email ? (
            <div className="text-[10px] text-red-300">{errors.email}</div>
          ) : null}{" "}
        </div>
        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          {errors.password && touched.password ? (
            <div className="text-[10px] text-red-300">{errors.password}</div>
          ) : null}{" "}
        </div>
        <div className="input-block">
          <label htmlFor="conf_pass" className="input-label">
            Confirm Password:
          </label>
          <input
            type="password"
            value={values.conf_pass}
            onChange={handleChange}
            onBlur={handleBlur}
            name="conf_pass"
            id="conf_pass"
            placeholder="Enter Password"
          />
          {errors.conf_pass && touched.conf_pass ? (
            <div className="text-[10px] text-red-300">{errors.conf_pass}</div>
          ) : null}{" "}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
