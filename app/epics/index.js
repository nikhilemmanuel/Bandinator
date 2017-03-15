// 'use strict';

// import pingEpic from './pingEpic';

// export { pingEpic };
export const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

    // dispatch({ type: 'PONG' });
