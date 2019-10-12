import React, { Component } from "react";
import axios from "axios";

class AddScreenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      screenwriter: "",
      co_author: "",
      description: "",
      category: ""
    };
  }
  render() {
    return (
      <div>
        <form>
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
            name="co_writer"
            value={this.state.co_writer}
            onChange={this.handleInputChange}
            id="co_writer"
            placeholder="Co Writer"
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

export default AddScreenplay;
