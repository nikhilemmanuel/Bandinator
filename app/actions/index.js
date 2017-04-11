export function ping() {
  console.log('ping called')
  return { 
    type: 'PING' 
  }
};
