import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // log out functionality
  logOut = () => {
    window.localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <div>
          <NavLink to="/">Screenplays</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/add">Submit</NavLink>

          {/* {localStorage.token ? (
            <button>Log Out</button>
          ) : (
            <NavLink to="#">Login</NavLink>
          )} */}
        </div>
      </nav>
    );
  }
}

export default Navigation;
