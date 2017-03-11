import {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
class AppContainer extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={{marginTop: 10}}> This is App Container </Text>
      </View>
    )
  }
}

const styles = Stylesheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps) (AppContainer); 