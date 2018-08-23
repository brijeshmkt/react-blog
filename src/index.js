import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducer/Index';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(
    app
    
    , document.getElementById('root'));
registerServiceWorker();
