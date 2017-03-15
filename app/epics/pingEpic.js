// const pingEpic = action$ =>
//   action$.filter(action => action.type === 'PING')
//     .delay(1000) // Asynchronously wait 1000ms then continue
//     .mapTo({ type: 'PONG' });

//    OR a Better approach is

 const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

// later...
dispatch({ type: 'PING' });

