import React, { Component } from 'react';
import { Route } from 'react-router';
import { BasicLayout } from './components/templates/BasicLayout/views/BasicLayout';
import { HomePage } from './components/pages/Home/views/HomePage';
import { NumberListPage } from './components/pages/NumberList/views/NumberListPage';
import { NumberQuizPage } from './components/pages/NumberQuiz/views/NumberQuizPage';

import './globals/css/global.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BasicLayout>
        <Route exact path='/' component={HomePage} />
        <Route path='/number_list' component={NumberListPage} />
        <Route path='/number_quiz' component={NumberQuizPage} />
      </BasicLayout>
    );
  }
}
