import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App); //gives app ability to have things history and whatever route component comes with

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);
