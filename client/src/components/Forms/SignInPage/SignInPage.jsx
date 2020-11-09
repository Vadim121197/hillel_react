import React, { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm, reset } from "redux-form";
import axios from "axios";
import { renderField, validate } from "../../../helpers/helpers";
import "./SignInPage.css";
import { getFormValues } from "../../../redux/selectors/formsSelector";
import { AuthContext } from "../../../context/AuthContext";

const SignInPage = () => {
  const auth = useContext(AuthContext);

  const [alert, setAlert] = useState("");

  const formValues = useSelector((state) => getFormValues(state, "signIn"));
  const dispatch = useDispatch();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/auth/login", { ...formValues })
        .then((response) => {
          setAlert(response.data.message);
          auth.login(response.data.token, response.data.userId);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }

    dispatch(reset("signIn"));
  };

  return (
    <form className="forms" onSubmit={signInHandler}>
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
        autocomplete="new-password"
      />
      <h4>{alert}</h4>
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
