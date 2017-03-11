'use strict';

import {take, put, call, fork, select} from 'redux-saga/effects';
import {TestActions} from '../actions';
import {Alert} from 'react-native';

const isTrue = true;

function * watchTest() {
  while (isTrue) {
    let action = yield take(TestActions.TEST);
    alert('In saga');
  }
}