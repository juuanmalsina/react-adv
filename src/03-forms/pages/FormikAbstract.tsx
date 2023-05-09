import React from "react";
import { Form, Formik } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikAbstract = () => {
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
            <MyTextInput name="firstName" label="First name" />
            <MyTextInput name="lastName" label="Last name" />
            <MyTextInput name="email" label="Email" />

            <MySelect label="Job type" name="jobType">
              <option value="">Pick one</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="QA">QA</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms and conditions" />

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

export default FormikAbstract;
