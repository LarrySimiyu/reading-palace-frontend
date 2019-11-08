import React, { Component } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class AddScreenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      screenwriter: "",
      cowriter: "",
      description: "",
      category: "",
      pdfurl: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      title,
      screenwriter,
      cowriter,
      description,
      category,
      pdfurl
    } = this.state;

    let newScreenplay = {
      title,
      screenwriter,
      cowriter,
      description,
      category,
      pdfurl
    };

    axios
      .post("https://movie-palace.herokuapp.com/api/filmInfo", newScreenplay)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            // clears out the form so they can submit again
            title: "",
            screenwriter: "",
            cowriter: "",
            description: "",
            category: "",
            pdfurl: ""
          });
          this.props.history.push("/");
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <div className="screenplay-form">
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
              name="cowriter"
              value={this.state.cowriter}
              onChange={this.handleInputChange}
              id="cowriter"
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

            <input
              type="text"
              name="pdfurl"
              value={this.state.pdfurl}
              onChange={this.handleInputChange}
              id="pdfurl"
              placeholder="Paste PDF Link"
            />

            <Button color="danger" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddScreenplay;
