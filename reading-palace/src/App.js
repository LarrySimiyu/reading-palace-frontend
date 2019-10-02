import React, { useState } from "react";
import "./App.css";

import Hitlist from "./components/Hitlist";
import Navigation from "./components/Navigation";

function App() {
  // const [state, setState] = useState([{id: 1, name: 'Hello'}])
  return (
    <div className="App">
      <h1>Testing</h1>
      <Hitlist />
      <Navigation />
    </div>
  );
}

export default App;
