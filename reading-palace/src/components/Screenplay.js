import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplay: {}
    };
  }

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];

    axios
      .get(`https://movie-palace.herokuapp.com/api/filmInfo/${id}`)
      .then(response => {
        this.setState({
          screenplay: response.data[0]
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Screenplay Info</h1>
        </div>
        <div>{this.state.screenplay.title}</div>
        <div>
          {this.state.screenplay.co_author.length > 0 ? (
            <div>{this.state.screenplay.co_author}</div>
          ) : (
            <div>No Co Author</div>
          )}
        </div>
        <div>{this.state.screenplay.description}</div>
        <div>{this.state.screenplay.category}</div>
      </div>
    );
  }
}

export default Screenplay;
