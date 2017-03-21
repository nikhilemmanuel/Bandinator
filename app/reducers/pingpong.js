export default (state = { isJonging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };

    case 'PONG':
      return { isPinging: false };
      
    case 'JONG':
      return { isJonging: true };

    case 'JONG2':
      return { isJonging: false };

    default:
      return state;
  }
};