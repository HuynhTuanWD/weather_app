import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
const middleware =applyMiddleware(thunk, logger);
const initialState = window.INITIAL_STATE;
const store = createStore(reducers,initialState, middleware);
const AppRoot = 
<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>;
ReactDOM.render(AppRoot, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
