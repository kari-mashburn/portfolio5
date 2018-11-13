import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
  render() {
    //Footer just has links that are in the nav plus an email me!
    return (
      <footer class="footer">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/FAQ">FAQ</NavLink>
        <p>&copy;2018 <a href="mailto:kmashburn@student.fullsail.edu" id="email">Kari Mashburn</a></p>   
      </footer>
    );
  }
}

export default Footer;