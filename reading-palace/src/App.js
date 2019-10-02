import React, { useState } from "react";
import "./App.css";

import Screenplays from "./components/Screenplays";
import Navigation from "./components/Navigation";
import SearchScreenplays from "./components/searchScreenplay";
import Screenplay from "./components/Screenplay";

function App() {
  // const [state, setState] = useState([{id: 1, name: 'Hello'}])
  return (
    <div className="App">
      <Navigation />
      <SearchScreenplays />
      <Screenplays />
      <Screenplay />
    </div>
  );
}

export default App;
