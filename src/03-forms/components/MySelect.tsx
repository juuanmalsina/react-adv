import React from "react";
import { useField } from "formik";

interface MySelectProps {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}

const MySelect = ({ label, ...props }: MySelectProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default MySelect;
