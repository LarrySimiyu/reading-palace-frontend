import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            name="email"
          />
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            name="username"
          />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            name="password"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
