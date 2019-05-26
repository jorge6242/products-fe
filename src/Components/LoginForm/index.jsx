import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";
import "./index.sass";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, handleForm } = props;
  return (
    <Grid container spacing={0} className="login-form">
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid item xs={12} className="login-form__field">
          <Field
            name="email"
            type="name"
            component={renderField}
            label="Email"
          />
        </Grid>
        <Grid item xs={12} className="login-form__field">
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
        </Grid>
        <Grid item xs={12} className="login-form__field">
          <button type="submit" disabled={submitting}>
            {" "}
            Login
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </Grid>
      </form>
    </Grid>
  );
};

const CustomLoginForm = reduxForm({
  form: "loginForm",
  validate,
  enableReinitialize: true
})(LoginForm);

export default connect(null)(CustomLoginForm);
