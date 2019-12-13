import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import LoginPage from "../containers/LoginPage";
import Dashboard from "../containers/Dashboard";

export default function configureRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}
