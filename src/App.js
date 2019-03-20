import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as routes from "./utils/routes";
import { Home } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
