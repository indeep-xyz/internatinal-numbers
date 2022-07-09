import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { BasicLayout } from './components/templates/BasicLayout/views/BasicLayout';
import './globals/styles/global.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <BasicLayout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </BasicLayout>
        );
    }
}
