import React, { useState } from "react";
import "./FormCss.css";
const FormIntegration = () => {
    const initial={
        name: "",
        email: "",
        number: "",
        gender: "",
      }
  const [formData, setFormData] = useState(initial);
  const [errors, setError] = useState({});

  const handleFieldChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({
      errors,
      [name]: "",
    });
  };
  const handleKeyPress = (e) => {
    // Allow only numeric input
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const validate = () => {
    const newError = {};
    if (!formData.name) {
      newError.name = "Name Required";
    }
    if (!formData.email) {
      newError.email = "PLease Enter Email";
    }
    if (!formData.number) {
      newError.number = "please enter number";
    } else if (formData.number.length !== 10) {
      newError.number = "PLease enter 10 digit number only";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newError.number = "Mobile number must be 10 digits";
    }
    return newError;
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log("validationErrors", validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log(formData);
      alert("form Submitted successfully");
      setFormData(initial)

    }
  };
  return (
    <div>
      <div>FormIntegration</div>
      <form onSubmit={handleFormData}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFieldChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFieldChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="tel"
            maxLength={10}
            name="number"
            onKeyPress={handleKeyPress}
            value={formData.number}
            onChange={handleFieldChange}
          />
          {errors.number && <span>{errors.number}</span>}
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          male:
          <input
            id="male"
            name="gender"
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleFieldChange}
          />
          female:
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleFieldChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormIntegration;
