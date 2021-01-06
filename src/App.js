import './App.css';
import React from "react";
import Home from "./component/home/Home";


let App = () => {
  return(
      <React.Fragment>
          <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
              <a href="/" className="navbar-brand">Scrum Board</a>
          </nav>

          <Home/>

      </React.Fragment>
  );
};

export default App;
