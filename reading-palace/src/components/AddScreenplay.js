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

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, screenwriter, cowriter, description, category } = this.state;
  };

  addScreenplay = event => {
    event.preventDefault();

    const { title, screenwriter, cowriter, description, category } = this.state;

    let newScreenplay = {
      title,
      screenwriter,
      cowriter,
      description,
      category
    };

    axios
      .post("https://movie-palace.herokuapp.com/api/filmInfo", newScreenplay)
      .then(response => {
        if (response.status === 200) {
          alert("screenplay was added");
          this.setState({
            title: "",
            screenwriter: "",
            cowriter: "",
            description: "",
            category: ""
          });
          this.props.history.push("/filmInfo");
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        console.log(error.message);
      });
    this.props.history.push("/filmInfo");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            value={this.state.cowriter}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddScreenplay;
