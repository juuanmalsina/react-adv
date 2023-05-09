import React from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Basic tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Este campo es requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Este campo es requerido"),
          email: Yup.string()
            .email("Debe ingresar un email valido")
            .required("Este campo es requerido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Acepte los términos y condiciones"
          ),
          jobType: Yup.string()
            .notOneOf([""], "Debe selecionar una opción")
            .required("Este campo es requerido"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <span>
              <ErrorMessage name="firstName" />
            </span>

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <span>
              <ErrorMessage name="lastName" />
            </span>

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <span>
              <ErrorMessage name="email" />
            </span>

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" type="text" as="select">
              <option value="">Pick one</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="QA">QA</option>
            </Field>
            <span>
              <ErrorMessage name="jobType" />
            </span>

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <span>
              <ErrorMessage name="terms" />
            </span>

            <button type="button" onClick={() => resetForm()}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
