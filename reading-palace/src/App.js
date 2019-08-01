import React, { useState } from "react";
import "./App.css";

import Hitlist from "./components/Hitlist";

import { createStore, combineReducers } from "redux";

function App() {
  const [state, setState] = useState([{id: 1, name: 'Hello'}])
  return (
    <div className="App">
      <h1>Testing</h1>
      {/* <Hitlist /> */}
      {state.map(name => {
        <Name key={} />
      })}
    </div>
  );
}

export default App;
// differens between react functional and classical components
// how to use sass in react
// how to make a simple nodejs server
// making a todo app in react js and with a node server

const store = createStore(combineReducers({ A, B, C }));
store.dispatch({ type: "baz" });

function A(state = {}, action) {
  console.log("A");
  switch (action.type) {
    case "foo":
      console.log("bar");
    default:
      return state;
  }
}

function B(state = {}, action) {
  console.log("B");
  switch (action.type) {
    case "baz":
      console.log("qux");
    default:
      return state;
  }
}

function C(state = {}, action) {
  console.log("C");
  switch (action.type) {
    case "hello":
      console.log("world");
    default:
      return state;
  }
}
