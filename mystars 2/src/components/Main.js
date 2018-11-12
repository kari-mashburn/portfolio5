import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import FAQ from '../pages/FAQ';

class Main extends Component {
  render() {
    //This routes everything to the right place
    return (
      <section>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/FAQ' component={FAQ} />
        <div>
        </div>
      </section>
    );
  }
}

export default Main;
