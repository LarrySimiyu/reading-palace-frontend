import React, { useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation";

import SearchScreenplays from "./components/searchScreenplay";
import Screenplay from "./components/Screenplay";
import AddScreenplay from "./components/AddScreenplay";
import Screenplays from "./components/Screenplays";

import Hitlist from "./components/Hitlist";
import AddHitlist from "./components/AddHitList";

function App() {
  // const [state, setState] = useState([{id: 1, name: 'Hello'}])
  return (
    <div className="App">
      <Navigation />
      <SearchScreenplays />
      <Screenplays />
      <Screenplay />
      <Hitlist />
    </div>
  );
}

export default App;
