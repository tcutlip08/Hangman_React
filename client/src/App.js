import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Game from "./containers/Game";
import InputWord from "./containers/InputWord";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/input" component={InputWord} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
