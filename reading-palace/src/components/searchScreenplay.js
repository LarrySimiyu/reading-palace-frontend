import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          students: response.data
        });
      })
      .catch(error => console.log(error));
  }

  filter = () => {
    const filtered = this.state.screenplays.filter(screenplay => {
      return screenplay.title === this.state.searchInput;
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
    return (
      <div>
        <h1>Search By Title</h1>
        <form>
          <input
            type="text"
            placeholder="Screenplay Name"
            onChange={this.handleInputChange}
            value={this.state.searchInput}
            name="searchInput"
          />
          <button onClick={this.filter}>Search</button>
        </form>
        {this.state.filteredScreenplays.map(screenplay => {
          return (
            <div key={screenplay.id} className="screenplay">
              <Link to={`/filmInfo/${screenplay.id}`} className="linkColor">
                <div>Title: {screenplay.title}</div>
                <div>screenwriter: {screenplay.screenwriter}</div>
                <div>Co Author: {screenplay.coauthor}</div>
                <div>Description: {screenplay.description}</div>
                <div>Category: {screenplay.catetegory}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default searchScreenplay;
