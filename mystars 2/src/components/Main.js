import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from '../pages/Home'
import FAQ from '../pages/FAQ'
import RightSideBar from '../components/RightSide';


class Main extends Component {
  render() {
    return (
      <section>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/FAQ' component={FAQ} />

        <div>
          <RightSideBar />
        </div>
      </section>
    );
  }
}

export default Main;
