import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "../nav.scss";

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
      <nav className="nav-container">
        <div>
          <h1>Movie Palace</h1>
          {/* <NavLink to="/">Screenplays</NavLink> */}
          <NavLink to="/add" className="nav-link">
            Add Screenplay
          </NavLink>
          <NavLink to="/screenplays" className="nav-link">
            Screenplays
          </NavLink>

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

export default withRouter(Navigation);
