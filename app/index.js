'use strict'
import React from 'react';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import configureStore from './store';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import reducer from './reducers';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store: null
    }
  }

  componentWillMount() {
    console.disableYellowBox = true;
    AsyncStorage.getItem('applicationState', (error, appState) => {
      if (!error) {
        this.setState({
          store: configureStore(JSON.parse(appState))
        });
      }
    });
  }

  render() {
    if (this.state.store) {
      return (
        <Provider store={this.state.store}>
         <Screen1 />
        </Provider>
      )
    }

    return (<Screen2 />);
  }
}