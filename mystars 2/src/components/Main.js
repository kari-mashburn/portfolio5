import React, { Component } from 'react';
import {HashRouter as Route} from 'react-router-dom'

import Home from '../pages/Home'
import FAQ from '../pages/FAQ'


class Main extends Component {
  render() {
    return (
      <section>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/FAQ' component={FAQ} />

        <div>
        <Home />
        </div>
      </section>
    );
  }
}

export default Main;
