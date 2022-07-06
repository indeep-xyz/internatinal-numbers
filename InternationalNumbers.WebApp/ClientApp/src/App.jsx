import React, { Component } from 'react';
import { Route } from 'react-router';
import { BasicLayout } from './components/templates/BasicLayout/views/BasicLayout';
import { HomePage } from './components/pages/Home/views/HomePage';
import { NumberListPageWrapper } from './components/pages/NumberList/views/NumberListPageWrapper';
import { NumberQuizPageWrapper } from './components/pages/NumberQuiz/views/NumberQuizPageWrapper';
import { SolomonDemonListPageWrapper } from './components/pages/SolomonDemonList/views/SolomonDemonListPageWrapper';
import './globals/styles/global.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <BasicLayout>
                <Route exact path='/' component={HomePage} />
                <Route path='/number_list' component={NumberListPageWrapper} />
                <Route path='/number_quiz' component={NumberQuizPageWrapper} />

                <Route path='/solomon_demon_list' component={SolomonDemonListPageWrapper} />
            </BasicLayout>
        );
    }
}
