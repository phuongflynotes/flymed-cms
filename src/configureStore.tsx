import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './store';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const loggerMiddleware = (createLogger as any)();
  middleware.push(loggerMiddleware);
}

const enhancers = [applyMiddleware(...middleware)];

export const store = createStore(rootReducer, undefined, compose(...enhancers));

sagaMiddleware.run(rootSaga);
