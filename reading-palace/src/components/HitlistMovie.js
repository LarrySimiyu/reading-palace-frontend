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
        <form>
          <input
            type="text"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
            placeholder="Add A Screenplay"
          />
          <button onClick={this.addToHitlist}>Add To Hitlist</button>
        </form>
      </div>
    );
  }
}

export default HitlistMovie;
