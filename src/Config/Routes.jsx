import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "../Hoc/MainLayout";
import Login from "../Containers/Login";
import Dashboard from "../Containers/Dashboard";

class Routes extends Component {
  componentDidMount() {
    console.log("assadasdasddsdsadssddsd");
  }
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}
export default Routes;
