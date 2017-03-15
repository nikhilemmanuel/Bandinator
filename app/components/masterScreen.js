import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ping} from '../actions';

// let MasterScreen = ({ isPinging, ping }) => (   <div>     <h1>is pinging:
// {isPinging.toString()}</h1>     <button onClick={ping}>Start PING</button>
// </div> );

class MasterScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.props.ping}>
          <Text>
            Start PING
          </Text>
        </TouchableOpacity>
        <Text>
          {JSON.stringify(this.props.isPinging)}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

MasterScreen = connect(({isPinging}) => ({isPinging}), {ping})(MasterScreen);

export default MasterScreen;