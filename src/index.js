import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Don't even waste your time trying to understand wtf all this crap does.
 * Not even necessary when you don't even understand the basics of how Redux
 * interacts within a React app. Just focus on everything else.
 */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const logger = createLogger({
    collapsed: false
})

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
