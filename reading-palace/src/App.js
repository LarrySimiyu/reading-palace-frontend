import React, { useState } from "react";
import "./App.css";

import Screenplays from "./components/Screenplays";
import Navigation from "./components/Navigation";

function App() {
  // const [state, setState] = useState([{id: 1, name: 'Hello'}])
  return (
    <div className="App">
      <Navigation />
      <Screenplays />
    </div>
  );
}

export default App;
