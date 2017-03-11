/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './app/index';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import reducer from './app/reducers';

const loggerMiddleWare = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, 
      loggerMiddleWare
      )
    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({})

class Bandinator extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Bandinator', () => Bandinator);
