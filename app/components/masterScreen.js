import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getMyName} from '../actions';


class MasterScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.props.getMyName}>
          <Text>
            Start JONG
          </Text>
        </TouchableOpacity>
        <Text>
         Nothing
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

function mapStateToProps(state) {
  return {
   
  };
};
export default connect(mapStateToProps, { getMyName })(MasterScreen);