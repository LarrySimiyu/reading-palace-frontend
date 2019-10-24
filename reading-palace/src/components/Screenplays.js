import React, { Component } from "react";
import axios from "axios";

// import AddScreenplay from "./AddScreenplay";

class Screenplays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplays: []
    };
  }

  componentDidMount() {
    axios
      .get("https://movie-palace.herokuapp.com/api/filmInfo")
      .then(response => {
        const screenplays = response.data;
        this.setState({ screenplays });
      })
      .catch(error => console.log(error));
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.screenplays.length === 0 ? ( // if length of screenplay is 0 then return loading
          <div>Add some screenplays to read...</div>
        ) : (
          this.state.screenplays.map(screenplay => {
            return (
              <div className="screenplay" key={screenplay.id}>
                <div>Title: {screenplay.title}</div>
                <div>Screenwriter: {screenplay.screenwriter}</div>
                <div>Cowriter: {screenplay.co_writer}</div>
                <div>Description: {screenplay.description}</div>
                <div>Category: {screenplay.category}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Screenplays;
