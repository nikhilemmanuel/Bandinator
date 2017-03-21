import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import pingReducer from '../reducers/pingpong';
// import { newPing } from '../epics';
import { rootEpic } from '../actions/index';
import rootReducer from '../reducers/index';
import Immutable from 'immutable';

export default function configureStore(initialState) {
  initialState = initialState ? Immutable.fromJS(initialState) : Immutable.Map();
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
  );
  
  return store;
};