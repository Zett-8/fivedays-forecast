import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import './style/index.css';
import './style/bootstrap.min.css';

import App from './components/app';
import rootReducer from './reducers';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={store(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </Provider>,
    document.getElementById('root')
);


