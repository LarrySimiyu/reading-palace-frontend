import React, { Component } from "react";
import axios from "axios";

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
      .get("https://script-palace.herokuapp.com/api/filmInfo")
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
          this.state.users.map((e, i) => {
            return <div key={i}>{e.last_name}</div>;
          })
        )}
      </div>
    );
  }
}

export default Screenplays;
