import React, { Component } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "../addScreenplay.scss";

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
    const {
      title,
      screenwriter,
      cowriter,
      description,
      category,
      pdfurl
    } = this.state;
    const isEnabled =
      title.length > 0 &&
      screenwriter.length > 0 &&
      cowriter.length > 0 &&
      description.length > 0 &&
      category.length > 0 &&
      pdfurl.length > 0;
    return (
      <div>
        <div className="page-container">
          <div className="screenplay-form">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>

                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  id="title"
                  placeholder="Title"
                />
              </FormGroup>

              <FormGroup>
                <Label for="screenwriter">Screenwriter</Label>

                <Input
                  type="text"
                  name="screenwriter"
                  value={this.state.screenwriter}
                  onChange={this.handleInputChange}
                  id="screenwriter"
                  placeholder="Screenwriter"
                />
              </FormGroup>

              <FormGroup>
                <Label for="cowriter">Co-Writer</Label>
                <Input
                  type="text"
                  name="cowriter"
                  value={this.state.cowriter}
                  onChange={this.handleInputChange}
                  id="cowriter"
                  placeholder="Co-Writer"
                />
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  id="description"
                  placeholder="Screenplay Description"
                />
              </FormGroup>

              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  id="category"
                  placeholder="category"
                />
              </FormGroup>

              <FormGroup>
                <Label for="pdfurl">PDF</Label>
                <Input
                  type="text"
                  name="pdfurl"
                  value={this.state.pdfurl}
                  onChange={this.handleInputChange}
                  id="pdfurl"
                  placeholder="Paste PDF Link"
                />
              </FormGroup>

              <Button color="primary" type="submit" disabled={!isEnabled}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddScreenplay;
