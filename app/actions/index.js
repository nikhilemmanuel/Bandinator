import { combineEpics } from 'redux-observable';
import { getMyName, getMyNameEpic } from './getMyName';

const rootEpic = combineEpics(
  getMyNameEpic
);
export { getMyName, rootEpic };