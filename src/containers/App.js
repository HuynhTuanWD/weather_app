import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}
