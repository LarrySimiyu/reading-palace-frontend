import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

import AddHitlist from "./AddHitList";

class Hitlist extends Component {
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
      .get("https://movie-palace.herokuapp.com/api/hitlist")
      .then(response => {
        this.setState({
          screenplays: response.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <AddHitlist />
        {this.state.screenplays.length === 0 ? (
          <div>Add to the infamous hitlist..</div>
        ) : (
          this.state.screenplays.map(screenplay => {
            return (
              <div key={screenplay.id}>
                <div>{screenplay.title}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Hitlist;
