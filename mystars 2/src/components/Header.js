import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <div>
        <header className="myHeader">
          <h3>What's In My Stars?</h3>
        </header>
        <div>
          <p>Horoscope Content</p>
        </div>
          <Nav />
      </div>
    );
  }
}

export default Header;
