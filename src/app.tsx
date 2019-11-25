import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  Home from './components/Home';
import './i18n';
import { HashRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <React.Suspense fallback={<div>Loading...</div>}>
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
            </Switch>
        </HashRouter>
    </React.Suspense>,
    document.getElementById('app'))
;
