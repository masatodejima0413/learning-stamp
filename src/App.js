import React from "react";
import Title from "./components/Title/Title";
import Home from "./components/Login/Home";
import Main from "./components/Main/Main";
import Copyright from "./components/Footer/Copyright";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Title />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <Main path="/:userid" exact />
        </Route>
      </Switch>
      <Copyright />
    </Router>
  );
};

export default App;
