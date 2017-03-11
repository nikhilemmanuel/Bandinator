'use strict';

import Immutable, { fromJS, toJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { TestActions } from '../actions';
import test from './test';

const appReducer = combineReducers({
  test
});

const rootReducer = (state, action) => {
  // if (action.type === TestActions.TEST) {
  //   state = Immutable.Map();
  // }
  
  return appReducer(state, action)
};

export default rootReducer;