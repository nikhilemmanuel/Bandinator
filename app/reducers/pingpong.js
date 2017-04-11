export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      console.log('ping called reducer')
      return { isPinging: 'PINGGGGGGGG' };

    case 'PONG':
      console.log('pong called reducer')
      return { isPinging: 'PONGGGGGG' };

    default:
      return state;
  }
};
