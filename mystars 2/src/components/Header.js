import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    //This is where my banner and my horoscope artwork lies
    return (
      <div>
        <header className="myHeader">
        <h1>What's in My Stars?</h1>
        </header>
        <div className="myContent">
        </div>
          <Nav />
      </div>
    );
  }
}

export default Header;
