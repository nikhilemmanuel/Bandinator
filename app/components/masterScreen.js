import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
// import {getMyName} from '../actions';
import { ping, getMovies, pingNew } from '../actions';

class MasterScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.props.pingNew}>
          <Text>
            PING NEW HERE
          </Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.props.ping}>
          <Text>
            PING HERE
          </Text>
        </TouchableOpacity>
        <Text>Result :  
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

function mapStateToProps(state) {
  console.log('mapStateToProps',state)
  return {
    data: state.user,
    page: state.page
  }
}

// function mapStateToProps(state) {
//   return {
//    isPinging: state.
//   };
// };
export default connect(() => ({ }), { ping, getMovies, pingNew })(MasterScreen);