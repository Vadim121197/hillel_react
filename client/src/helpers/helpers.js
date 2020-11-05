import React from "react";

export const renderField = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        name={name}
        className="form-control"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Пустое полу";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Некорректный email";
  }

  if (!values.password) {
    errors.password = "Пустое полу";
  } else if (values.password.length < 6) {
    errors.password = "Минимальная длина 6 символов";
  }
  if (values.confPass !== values.password) {
    errors.confPass = "Неверный пароль";
  }
  return errors;
};
