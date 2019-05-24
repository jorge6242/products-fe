import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import "./index.sass";
import LoginForm from "../../Components/LoginForm";
import { login } from "../../Actions/loginActions";

class Login extends Component {
  handleForm = form => {
    const { history } = this.props;
    this.props.login(form).then(res => {
      if (res.status === 200) {
        history.push("/dashboard");
      }
    });
  };

  render() {
    return (
      <Grid container spacing={0} className="reminder-container">
        <Grid container spacing={0}>
          <Grid item xs={12} className="reminder-container__title">
            Login
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <LoginForm handleForm={this.handleForm} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mD = {
  login
};

export default withRouter(
  connect(
    null,
    mD
  )(Login)
);
