import "./App.css";
import React from 'react';
//import "@fontsource/roboto";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import AboutMePage from "./pages/AboutMePage";
import AppDrawer from "./components/AppDrawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <AppDrawer />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path ="/" exact>
              <HomePage />
            </Route>
            <Route path ="/Projects" exact>
              <ProjectsPage />
            </Route>
            <Route path ="/AboutMe" exact>
              <AboutMePage />
            </Route>
            <Route path ="/Resume" exact>
              <ResumePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
