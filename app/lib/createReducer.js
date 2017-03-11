export default function createReducer(initialStates, handlers) {
  return function reducer(state = initialStates, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state;
    }
  }
}