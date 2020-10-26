import React from "react";
import "./styles.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}
