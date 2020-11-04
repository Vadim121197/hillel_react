import React from "react";
import { reduxForm, Field } from "redux-form";

const SignUpPage = (props) => {
  return (
    <form className='forms'>
      <h2>Sign up</h2>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <Field
          name="email"
          component="input"
          className="form-control"
          type="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          className="form-control"
          component="input"
          type="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default reduxForm({
  form: "signUp",
})(SignUpPage);
