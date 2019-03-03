import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from '../containers/Login';
import MainView from '../containers/MainView';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history = {history}>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true}/>
                <Route path="/MainView" component={MainView} exact={true}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;