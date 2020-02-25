import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";
import Partner from "./pages/Partner/Partner";
import Tour from "./pages/Tour/Tour";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/tour" component={Tour} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
