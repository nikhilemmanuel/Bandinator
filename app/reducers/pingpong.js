export default (state = { isPinging: false}, action) => {
  console.log(action, 'inreducer')
  switch (action.type) {
    case 'PING':
      console.log('ping called reducer')
      return { isPinging: 'PINGGGGGGGG' };

    case 'PONG':
      console.log('pong called reducer')
      return { isPinging: 'PONGGGGGG' };

   case 'PING_NEW':
      console.log('ping new called reducer')
      return { isPinging: 'PING NEW' };

    case 'PONG_NEW':
      console.log('pong new called reducer')
      return { isPinging: 'PONG NEW' };

    case 'GET_MOVIES':
      alert('hi 1')
      console.log('movies ping')
      return;

    case 'GOT_MOVIES':
      alert('hi 1')
      console.log('movies pong')
      
    default:
      return state;
  }
};
