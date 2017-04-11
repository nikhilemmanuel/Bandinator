import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
// import {getMyName} from '../actions';
import { ping } from '../actions';

class MasterScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.props.ping}>
          <Text>
            Start JONG
          </Text>
        </TouchableOpacity>
        <Text>asdsada
         {this.props.isPinging}
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
export default connect(({ isPinging }) => ({ isPinging }), { ping })(MasterScreen);