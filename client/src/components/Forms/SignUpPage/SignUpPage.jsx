import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./SignUpPage.css";
import { renderField, validate } from "../../../helpers/helpers";

const SignUpPage = () => {
  const form = useSelector((state) => state.form["signUp"]);
  const [alert, setAlert] = useState("");

  console.log(form);
  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios
        .post("/api/auth/signup", { ...form.values })
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  };
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
      <button type="submit" className="btn btn-primary" onClick={signUpHandler}>
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
