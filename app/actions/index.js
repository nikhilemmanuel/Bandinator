export function ping() {
  return {
    type: 'PING'
  }
};

export function pingNew() {
  return {
    type: 'PING_NEW'
  }
};

export function getMovies() {
  console.log('getMovies action called')
  return {
    type: 'GET_MOVIES'
  }
};
