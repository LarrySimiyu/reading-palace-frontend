import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFriend = event => {};

  render() {
    return (
      <div>
        <h1>Submit Screenplay</h1>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          id="title"
          placeholder="title"
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange}
          id="description"
          placeholder="title"
        />
        <input
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleInputChange}
          id="category"
          placeholder="category"
        />
        <button />
      </div>
    );
  }
}

export default Screenplay;
