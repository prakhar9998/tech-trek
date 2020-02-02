import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Leaderboard from "./components/Leaderboard";
import Rules from "./components/Rules";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header-footer/header";
const Root = () => (
  <Router>
    <Header />
    <Switch>
      <PrivateRoute exact={true} path="/" component={Dashboard} />
      <Route exact={true} path="/login" component={App} />
      <Route exact={true} path="/rules" component={Rules} />
      <Route exact={true} path="/leaderboard" component={Leaderboard} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
