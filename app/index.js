'use strict'
import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import MasterScreen from './components/masterScreen'

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        store: null
      }
    }
    
  componentWillMount() {
    console.disableYellowBox = true;
    // AsyncStorage.getItem('applicationState', (error, appState) => {
    //   if(!error) {
    //     this.setState({ store: configureStore(JSON.parse(appState)) });     
    //   }
    // });
  }

  render() {
    console.log(store, 'sore')
    
      return (
        <Provider store={store}>
         <MasterScreen />
        </Provider>
      )
    
  }
}