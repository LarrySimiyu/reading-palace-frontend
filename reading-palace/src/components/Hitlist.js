import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Hitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplays: []
    };
  }
  render() {
    return (
      <div>
        <h1>Hitlist</h1>
      </div>
    );
  }
}

export default Hitlist;
