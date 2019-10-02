import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = () => {
    window.localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <div>
          <h1>this nav</h1>
          {/* to="/address" */}
          <NavLink to="/screenplays">Screenplays</NavLink>
          <NavLink to="/hitlist">Hitlist</NavLink>
          <NavLink to="/search">Search</NavLink>
          {localStorage.token ? (
            <button>Log Out</button>
          ) : (
            <NavLink to="#">Login</NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export default Navigation;
