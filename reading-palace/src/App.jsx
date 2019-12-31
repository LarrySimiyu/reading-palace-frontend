import React, { Component } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/Navigation";

//import SearchScreenplays from "./components/searchScreenplay";
import Screenplay from "./components/Screenplay";
import AddScreenplay from "./components/AddScreenplay";
import Screenplays from "./components/Screenplays";

import searchScreenplay from "./components/searchScreenplay";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path="/" component={searchScreenplay} />
        <Route exact path="/screenplay/:id" component={Screenplay} />
        <Route exact path="/add" component={AddScreenplay} />
        <Route exact path="/screenplays" component={searchScreenplay} />
      </div>
    );
  }
}

export default App;
