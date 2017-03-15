'use strict'
import React from 'react';
import { } from 'react-native';
import { Provider } from 'react-redux';
import 'rxjs';
import store from './store/index';
import MasterScreen from './components/masterScreen'

export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
         <MasterScreen />
        </Provider>
      )
  }
}