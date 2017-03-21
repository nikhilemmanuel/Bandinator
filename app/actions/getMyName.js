'use strict'
import * as actionTypes from '../constants/actionTypes';
import { Observable } from 'rxjs';

export function getMyName() {
  alert('hi')
  return {
    type: 'GET_MY_NAME'
  };
}
export const getMyNameEpic = (action$) => 
  action$.ofType('GET_MY_NAME')
    .mergeMap(() =>
      Observable.from(myname)
        .map(alertName)
    );

function myname() {
  return 'NIKHIL EMMANUEL';
} 

export function alertName(name) {
  alert(name)
}