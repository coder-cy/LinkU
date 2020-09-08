import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login.jsx';

export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}