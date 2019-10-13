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
      .catch(error => console.log(eror));
  }

  render() {
    return <div>Screenplay</div>;
  }
}

export default Screenplay;
