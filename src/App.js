import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';

import Login from "./components/login";
import Home from "./components/home";


import "./App.css";
function App() {

  return (
    <Router >
      <AuthProvider>
        <Switch>
          <Route  component={Login} path="/login"/>
          <Route  component={Home} path="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
