import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    state = {
      data: []
    };

componentDidMount() {
  const URL = 'https://aztro.sameerkumar.website/?sign=pisces&day=today';
  fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
    .then(json => {
      this.setState({
        data: json
      });
    });
}
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
           <div>
              Current Date: {this.state.data.current_date} <br />
              Compatibility: {this.state.data.compatibility} <br />
              Lucky Number: {this.state.data.lucky_number} <br />
              Lucky Time: {this.state.data.lucky_time} <br />
              Color: {this.state.data.color} <br />
              Date Range: {this.state.data.date_range} <br />
              Mood: {this.state.data.mood} <br />
              Description: {this.state.data.description} <br />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
