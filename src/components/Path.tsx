import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Restaurants, Resume, SCG} from '../page';

export const Path: React.FC = () => (
    <Switch>
        <Route exact={true} path={'/'}>
            <Home />
        </Route>
        <Route path={'/scg'}>
            <SCG />
        </Route>
        <Route path={'/resume'}>
            <Resume />
        </Route>
        <Route path={'/restaurants'}>
            <Restaurants />
        </Route>
    </Switch>
)
