import React from "react";
import { useFormik, FormikErrors } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.email) errors.email = "Required";

    return errors;
  };

  const { handleChange, values, resetForm, handleSubmit, errors ,handleBlur} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });
  const { firstName, lastName, email } = values;

  return (
    <div>
      <h1>Formik Basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        {errors.email && <span>Check for an valid Email format</span>}

        <button type="button" onClick={() => resetForm()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
