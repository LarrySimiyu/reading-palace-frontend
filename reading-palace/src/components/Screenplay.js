import React, { Component } from "react";
import axios from "axios";

class Screenplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenplay: {}
    };
  }

  // componentDidMount() {
  //   const id = this.props.location.pathname.split("/")[2];

  //   axios
  //     .get(`https://movie-palace.herokuapp.com/api/filmInfo/${id}`)
  //     .then(response => {
  //       this.setState({
  //         screenplay: response.data[0]
  //       });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    return (
      <div>
        <div>
          <h1>Screenplay Info</h1>
        </div>
        <div>Title: Larry Simiyu{this.state.screenplay.title}</div>
        <div>Co-Author: Nobody Bidness{this.state.screenplay.coauthor}</div>
        <div>Description: Here for now{this.state.screenplay.description}</div>
        <div>Category: Mategory {this.state.screenplay.category}</div>
      </div>
    );
  }
}

export default Screenplay;
