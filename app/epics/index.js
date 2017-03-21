'use strict';

// export const pingEpic = action$ =>
//   action$.ofType('PING')
//     .delay(1000) // Asynchronously wait 1000ms then continue
//     .mapTo({ type: 'PONG' });
export const newPing = action$ =>
  action$.ofType('JONG')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'JONG2' });




