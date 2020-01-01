import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Input, FormGroup, Label, Form } from "reactstrap";

import "../searchScreenplay.scss";

class searchScreenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplays: [],
      searchInput: "",
      filteredScreenplays: []
    };
  }

  componentDidMount() {
    axios
      .get("https://movie-palace.herokuapp.com/api/filmInfo")
      .then(response => {
        this.setState({
          screenplays: response.data
        });
      })
      .catch(error => console.log(error));
  }

  filter = () => {
    const filtered = this.state.screenplays.filter(screenplay => {
      return screenplay.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    this.setState({
      filteredScreenplays: filtered
    });
  };

  handleInputChange = event => {
    this.setState(
      {
        searchInput: event.target.value
      },
      () => this.filter()
    );
  };

  render() {
    const results =
      this.state.searchInput.length === 0
        ? this.state.screenplays
        : this.state.filteredScreenplays;
    return (
      <div className="results-container">
        <div className="search-input">
          <Form>
            <FormGroup>
              <Input
                type="text"
                placeholder="Search"
                onChange={this.handleInputChange}
                value={this.state.searchInput}
                name="Search By Title"
              />
            </FormGroup>
          </Form>
        </div>
        <div className="screenplays">
          {results.map(screenplay => {
            return (
              <div key={screenplay.id} className="screenplay">
                <div>Title: {screenplay.title}</div>
                <div>screenwriter: {screenplay.screenwriter}</div>
                <div>Co Author: {screenplay.coauthor}</div>
                <div>Category: {screenplay.catetegory}</div>
                <Link to={`/screenplay/${screenplay.id}`} className="linkColor">
                  <button>More</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default searchScreenplay;
