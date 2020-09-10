import React from "react";
import CoverPage from "./CoverPage";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={CoverPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </div>
    </>
  );
}

export default App;
