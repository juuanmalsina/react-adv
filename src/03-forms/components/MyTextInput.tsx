import React from "react";
import { useField, ErrorMessage } from 'formik';

interface MyTextInputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      <span>
        <ErrorMessage name={props.name} />
      </span>
    </>
  );
};

export default MyTextInput;
