import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Menu from './Pages/Menu';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/menu" component={Menu}/>
            </Switch>
        </BrowserRouter>
    );
}