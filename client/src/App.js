import React from "react";
import "./App.css";
import Home from "./containers/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
