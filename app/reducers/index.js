import * as actionTypes from '../constants/actionTypes';
export default (state = { name: 'nikhil' }, action) => {
  switch (action.type) {
    case 'GET_MY_NAME':
      return { name: 'kill' };

    default:
      return state;
  }
};