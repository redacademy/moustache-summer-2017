import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import combineReducer from './reducers';
import client from '../config/apolloClient';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger, client.middleware())
    )
)

export default store;