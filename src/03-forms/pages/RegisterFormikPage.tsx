import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Registe Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener al menos 2 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Este campo es requerido"),
          email: Yup.string()
            .email("Debe ingresar un email valido")
            .required("Este campo es requerido"),
          password: Yup.string()
            .min(6, "Debe tener al menos 6 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Este campo es requerido"),
          repeatPassword: Yup.string()
            .min(6, "Debe tener al menos 6 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Este campo es requerido")
            .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <MyTextInput name="name" label="Name" placeholder="Fernando" />
            <MyTextInput
              name="email"
              label="Email"
              placeholder="john@google.com"
            />
            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="********"
            />
            <MyTextInput
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              placeholder="********"
            />

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

export default RegisterFormikPage;
