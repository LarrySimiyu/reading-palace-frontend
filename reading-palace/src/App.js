import React, { Component } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";

import SearchScreenplays from "./components/searchScreenplay";
import Screenplay from "./components/Screenplay";
import AddScreenplay from "./components/AddScreenplay";
import Screenplays from "./components/Screenplays";

import Hitlist from "./components/Hitlist";
import AddHitlist from "./components/AddHitList";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path="/" component={Screenplays} />
        <Route exact path="/screemplay" component={Screenplay} />
        <Route exact path="/add" component={AddScreenplay} />
      </div>
    );
  }
}

export default App;
