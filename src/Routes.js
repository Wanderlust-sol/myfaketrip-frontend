import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tour from "./pages/Tour/Tour";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUP"
import Partner from "./pages/Partner/Partner";


import Offer from "./pages/Offer/Offer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Tour} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/tour" component={Tour} />
          <Route exact path="/offer" component={Offer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
