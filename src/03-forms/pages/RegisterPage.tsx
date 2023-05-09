import React from "react";

import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    name,
    email,
    password,
    repeatPassword,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Registe Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={onChange}
          className={` ${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={` ${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          className={` ${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener mas de 6 caracteres</span>
        )}
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={onChange}
          className={` ${repeatPassword.trim().length <= 0 && "has-error"}`}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {repeatPassword.trim().length > 0 && repeatPassword !== password && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
