import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './routes';

const app = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(
    app
    
    , document.getElementById('root'));
registerServiceWorker();
