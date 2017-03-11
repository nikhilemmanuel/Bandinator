'use strict'
import React from 'react';
import {View, Text, appWrapper, StyleSheet} from 'react-native';
import Screen1 from './screens/screen1';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appWrapper}>
        <Text>
          yes
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  appWrapper: {
    flex: 1,
    backgroundColor: 'green'
  }

});