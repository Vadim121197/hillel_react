import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { renderField, validate } from "../../../helpers/helpers";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <form className="forms">
      <h2>Sign in</h2>
      <Field
        name="email"
        label="Email Address"
        type="text"
        component={renderField}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        component={renderField}
      />
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
      <NavLink to="/signup">Don`t have an account?</NavLink>
    </form>
  );
};

export default reduxForm({
  form: "signIn",
  validate,
})(SignInPage);
