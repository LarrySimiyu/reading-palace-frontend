import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      screenwriter: "",
      description: "",
      category: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addScreenplay = event => {
    event.preventDefault();

    const { title, screenwriter, description, category } = this.state;

    let newScreenplay = {
      title,
      screenwriter,
      description,
      category
    };
  };

  render() {
    return (
      <div>
        <h1>Submit Screenplay</h1>
        <form onSubmit={this.addScreenplay}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            id="title"
            placeholder="Title"
          />

          <input
            type="text"
            name="screenwriter"
            value={this.state.screenwriter}
            onChange={this.handleInputChange}
            id="screenwriter"
            placeholder="Screenwriter"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            id="description"
            placeholder="Description"
          />
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
            id="category"
            placeholder="category"
          />
          <button onClick={this.addScreenplay}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Screenplay;
