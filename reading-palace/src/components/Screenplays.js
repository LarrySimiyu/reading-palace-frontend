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
    this.getScreenplays();
  }

  getScreenplays = () => {
    axios
      .get("https://movie-palace.herokuapp.com/api/filmInfo")
      .then(response => {
        this.setState({
          screeenplays: response.data
        });
      })
      .catch(error => console.log(error));
  };

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
                <div>{screenplay.title}</div>
                <div>{screenplay.screenwriter}</div>
                <div>{screenplay.co_writer}</div>
                <div>{screenplay.description}</div>
                <div>{screenplay.category}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Screenplays;
