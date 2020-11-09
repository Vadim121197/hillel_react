import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./SignUpPage.css";
import { renderField, validate } from "../../../helpers/helpers";
import { getFormValues } from "../../../redux/selectors/formsSelector";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const SignUpPage = () => {
  const [alert, setAlert] = useState("");

  const auth = useContext(AuthContext);

  const formValues = useSelector((state) => getFormValues(state, "signUp"));
  const dispatch = useDispatch();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/auth/signup", { ...formValues })
        .then((response) => {
          setAlert(response.data.message)
          auth.login(response.data.token, response.data.userId);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }

    if (alert === "Пользователь создан успешно") {
      dispatch(reset("signUp"));
    }
  };

  console.log(formValues);
  return (
    <form className="forms" onSubmit={signUpHandler}>
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
        autocomplete="new-password"
      />
      <Field
        name="confPass"
        label="Confirm Password"
        type="password"
        component={renderField}
        autocomplete="new-password"
      />
      <h4>{alert}</h4>
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
