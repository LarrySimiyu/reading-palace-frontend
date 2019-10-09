import React, { Component } from "react";

class AddHitlist extends Component {
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
  render() {
    return <div></div>;
  }
}

export default AddHitlist;
