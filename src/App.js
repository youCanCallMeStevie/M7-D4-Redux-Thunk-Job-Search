import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import JobDetails from "./Pages/JobDetails/JobDetails";
import FavList from "./Pages/FavList/FavList";




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route
          path="/details/:jobId"
          exact
          render={props => <JobDetails {...props} />}
        />
        <Route path="/favs" exact render={props => <FavList {...props} />} />
      </Router>
    </div>
  );
}

export default App;
