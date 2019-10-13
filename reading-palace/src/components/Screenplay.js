import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      screenwriter: "",
      co_writer: "",
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
    return <div></div>;
  }
}

export default Screenplay;
