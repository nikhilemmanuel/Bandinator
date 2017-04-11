export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
    alert('ping called')
      return { isPinging: true };

    case 'PONG':
    alert('pong called')
      return { isPinging: false };

    default:
      return state;
  }
};
