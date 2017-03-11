/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import App from './app/index';
import {AppRegistry} from 'react-native';

class Bandinator extends React.Component {
   render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Bandinator', () => Bandinator);
