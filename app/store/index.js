import { combineEpics } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import pingReducer from '../reducers/pingpong';
import { pingEpic, pingEpicNew, fetchMoviesEpic } from '../epics';
import { merge } from 'rxjs/observable/merge';

export const rootEpic = combineEpics(
  pingEpic,
  pingEpicNew
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);
