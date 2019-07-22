import React, { Component } from "react";
import axios from "axios";

class Screenplays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplays: []
    };
  }
  render() {
    return (
      <div>
        <h1>Screenplays</h1>
      </div>
    );
  }
}

export default Screenplays;
