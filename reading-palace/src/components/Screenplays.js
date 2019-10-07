import React, { Component } from "react";
import axios from "axios";

class Screenplays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //screenplays: ["larry", "movie two", "movie three", "movie four"]
      users: []
    };
  }

  componentDidMount() {
    this.getScreenplays();
  }

  getScreenplays = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(data => this.setState({ users: data.data.data }))
      .catch(error => {
        console.log(error);
        return null;
      });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.users.length === 0 ? (
          <div>Loading...</div>
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
