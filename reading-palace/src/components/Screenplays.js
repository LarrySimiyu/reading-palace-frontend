import React, { Component } from "react";
import axios from "axios";

class Screenplays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplays: ["larry", "movie two", "movie three", "movie four"]
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Screenplays</h1>
        {this.state.screenplays.map(screenplay => {
          return <div>{screenplay}</div>;
        })}
      </div>
    );
  }
}

export default Screenplays;
