import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Nav extends Component {
  render() {
    return (
      <div class="sidenav">
      <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/FAQ">FAQ</NavLink>
      </nav>
      </div>
    );
  }
}

export default Nav;

