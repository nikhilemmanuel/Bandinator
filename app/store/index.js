'use strict';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import { AsyncStorage } from 'react-native';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const localStorageMiddleware = ({getState}) => {
  return (next) => (action) => {
    const result = next(action);
    AsyncStorage.setItem('applicationState', JSON.stringify(
      { 
        
      }
    ));
    return result;
  };
};

export default function configureStore(initialState) {
  initialState = initialState ? Immutable.fromJS(initialState) : Immutable.Map();
  let sagaMiddleware = createSagaMiddleware({});
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, localStorageMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};