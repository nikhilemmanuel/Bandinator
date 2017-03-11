import {combineReducers} from 'redux';
import * as randomReducers from './random';

export default combineReducers(Object.assign({}, 
	randomReducers
));