import { takeEvery, takeLatest } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import testSagas from './test';

export default function* root() {
  yield [
    fork(testSagas)
  ]
};