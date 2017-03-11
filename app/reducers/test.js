'use strict';

import { TestActions } from '../actions';
import Immutable from 'immutable';

const { Map, fromJS } = Immutable;

const initialState = Map({
});

export default function (state = initialState, action) {
  
  switch(action.type) {
    case TestActions.SET_TEST:       
      state = state.set('test', action.data); 
      return state;

    default:
      return state;
  }
};