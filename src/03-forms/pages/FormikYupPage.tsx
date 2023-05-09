import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikYupPage = () => {
  const {
    getFieldProps,
    resetForm,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Este campo es requerido"),
      lastName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Este campo es requerido"),
      email: Yup.string()
        .email("Debe ingresar un email valido")
        .required("Este campo es requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="button" onClick={() => resetForm()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
