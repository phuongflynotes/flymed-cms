import { createStore, applyMiddleware, compose, Store } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import Immutable from 'immutable';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from '@Root/reducers';
import rootSaga from '@Root/sagas';
import {IGlobalState} from '@Root/types';

export default (history: History, initialState: IGlobalState | {}): Store<IGlobalState> => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const loggerMiddleware = (createLogger as any)();
    middleware.push(loggerMiddleware);
  }
  
  // Enhancer
  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
          immutable: Immutable,
        },
      }) : compose;

  const enhancers = composeEnhancers(
    applyMiddleware(routerMiddleware(history), ...middleware),
  );
  const store = createStore(rootReducer(history), initialState, enhancers);
  
  sagaMiddleware.run(rootSaga);

  // Enable Webpack hot module replacement for reducers
  if ((module as any).hot) {
    (module as any).hot.accept('@Root/store', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
