import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Nav extends Component {
  render() {
    return (
      <div class="sidenav">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/FAQ">FAQ</NavLink>
      </div>
    );
  }
}

export default Nav;