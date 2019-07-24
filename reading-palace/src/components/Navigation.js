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
          <NavLink to="#">Hitlist</NavLink>
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

export default withRouter(Navigation);
