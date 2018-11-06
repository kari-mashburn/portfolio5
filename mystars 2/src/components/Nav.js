import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/FAQ">FAQ</NavLink>
      </nav>
    );
  }
}

export default Nav;
