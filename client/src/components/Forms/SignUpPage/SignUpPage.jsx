import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import "./SignUpPage.css";
import { renderField, validate } from "../../../helpers/helpers";

const SignUpPage = () => {
  return (
    <form className="forms">
      <h2>Sign up</h2>
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
      <Field
        name="confPass"
        label="Confirm Password"
        type="password"
        component={renderField}
      />
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <NavLink to="/">Already have an account?</NavLink>
    </form>
  );
};

export default reduxForm({
  form: "signUp",
  validate,
})(SignUpPage);
