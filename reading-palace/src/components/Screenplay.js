import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplay: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id; //under the hood of Router
    //match is an object with property of params
    // properties inside of params depends on the dynamic route you put
    //in the path after the colin :id

    axios
      .get(`https://movie-palace.herokuapp.com/api/filmInfo/${id}`)
      .then(response => {
        // what the server is giving back , always console log to make sure
        console.log(response);
        this.setState({
          screenplay: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.screenplay === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <div>
          <h1>Screenplay Info</h1>
        </div>
        <div>Title: {this.state.screenplay.title}</div>
        <div>Co-Author: {this.state.screenplay.coauthor}</div>
        <div>Description: {this.state.screenplay.description}</div>
        <div>Category: {this.state.screenplay.category}</div>
        <button>Read</button>
      </div>
    );
  }
}

export default Screenplay;
