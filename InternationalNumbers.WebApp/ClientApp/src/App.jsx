import React, { Component } from 'react';
import { Route } from 'react-router';
import { BasicLayout } from './components/templates/BasicLayout/views/BasicLayout';
import { Home } from './components/pages/Home/views/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './globals/css/global.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BasicLayout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </BasicLayout>
    );
  }
}
