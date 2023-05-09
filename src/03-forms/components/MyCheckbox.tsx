import React from "react";
import { useField, ErrorMessage } from "formik";

interface MyCheckboxProps {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}

const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <span>
        <ErrorMessage name={props.name} />
      </span>
    </>
  );
};

export default MyCheckbox;
