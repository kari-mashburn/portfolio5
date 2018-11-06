import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaHandPeace} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer>
        <NavLink to="/Home"><FaHome /></NavLink>
        <NavLink to="/FAQ"><FaHandPeace /></NavLink>   
      </footer>
    );
  }
}

export default Footer;
