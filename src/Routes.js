import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
