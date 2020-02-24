import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tour from "./pages/Tour/Tour";
import Login from "./pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Tour} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
