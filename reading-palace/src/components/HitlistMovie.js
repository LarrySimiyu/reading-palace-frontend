import React, { Component } from "react";
import axios from "axios";

class HitlistMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
        <h1>Hitlist</h1>
        <input
          type="text"
          name="title"
          onChange={this.handleInputChange}
          value={this.state.title}
          placeholder="Add A Screenplay"
        />
      </div>
    );
  }
}

export default HitlistMovie;
