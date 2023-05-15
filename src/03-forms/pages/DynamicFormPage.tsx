import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLegth") {
      schema = schema.min((rule as any).value || 2, `Debe usar minimo ${(rule as any).value} caracteres`);
    }
    if (rule.type === "email") {
        schema = schema.email("El email ingresado no es valido");
      }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ resetForm }) => (
          <>
            <Form noValidate>
              {formJson.map(
                ({ name, label, placeholder, type, options, value }) => {
                  if (
                    type === "input" ||
                    type === "password" ||
                    type === "email"
                  ) {
                    return (
                      <MyTextInput
                        key={name}
                        type={type as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                      />
                    );
                  }
                  if (type === "select") {
                    return (
                      <MySelect key={name} label={label} name={name}>
                        <option value="">Seleccione una opción</option>
                        {options?.map(({ id, label }) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </MySelect>
                    );
                  }
                  return <span>Type: {type} no es soportado</span>;
                }
              )}
              <button type="button" onClick={() => resetForm()}>
                Reset
              </button>
              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default DynamicFormPage;
