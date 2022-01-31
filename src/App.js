import "./App.css";
import React from 'react';
//import "@fontsource/roboto";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import AboutMePage from "./pages/AboutMePage";
import AppDrawer from "./components/AppDrawer";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        
        <Router>
        <AppDrawer />
          <Routes>
            <Route path ="/" exact element={<HomePage />}/>
            <Route path ="/Projects" exact element={<ProjectsPage />}/>
            <Route path ="/AboutMe" exact element={<AboutMePage />}/> 
            <Route path ="/Resume" exact element={<ResumePage />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
