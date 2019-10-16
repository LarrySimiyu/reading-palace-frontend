import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

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
          <NavLink to="/add">Submit</NavLink>
          <NavLink to="/search">Search</NavLink>

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
