import React from "react";
import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import {
  Homepage,
  Projects,
  NotFound,
  Footer,
  Navigationbar,
  Resume
} from "./components/storeRoutes/storeRoutes";
function App() {
  return (
    <div className="App">
      {/* <Navigationbar /> */}
      <header className="App-header">

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="*" component={NotFound} />
        </Switch>
      </header>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
