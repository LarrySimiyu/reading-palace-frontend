import React, { Component } from "react";

class AddHitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      screenwriter: "",
      co_writer: "",
      description: "",
      category: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addScreenplay = event => {
    event.preventDefault();

    const {
      title,
      screenwriter,
      co_writer,
      description,
      category
    } = this.state;

    let newScreenplay = {
      title,
      screenwriter,
      co_writer,
      description,
      category
    };

    axios
      .post("https://script-palace.herokuapp.com/api/hitList", newScreenplay)
      .then(response => {
        if (response.status === 200) {
          alert("screenplay was added");
          this.setState({
            title: "",
            screenwriter: "",
            co_writer: "",
            description: "",
            category: ""
          });
          this.props.history.push("/filmInfo");
        } else {
          throw new Error(); // something wernt wrong
        }
      })
      .catch(error => {
        console.log(error.message);
      });
    this.props.history.push("/filmInfo");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addScreenplay}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            id="title"
            placeholder="Title"
          />

          <input
            type="text"
            name="screenwriter"
            value={this.state.screenwriter}
            onChange={this.handleInputChange}
            id="screenwriter"
            placeholder="Screenwriter"
          />
          <input
            type="text"
            name="screenwriter"
            value={this.state.co_writer}
            onChange={this.handleInputChange}
            id="co_writer"
            placeholder="Co Writer"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            id="description"
            placeholder="Description"
          />
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
            id="category"
            placeholder="category"
          />
          <button onClick={this.addScreenplay}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddHitlist;
