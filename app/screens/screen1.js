'use strict'
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TestActions } from '../actions';

class Screen1 extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
          Screen 1
        </Text>
        <Text onPress={() => this.callTest()} style={styles.testStyle}>
          TEST
        </Text>
      </View>
    );
  }

  callTest() {
    this.props.test()
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  testStyle: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50
  }
})

function mapStateToProps(state) {
  return {
  
  };
};

module.exports = connect(mapStateToProps, { ...TestActions })(Screen1);