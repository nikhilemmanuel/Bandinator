import { Observable } from 'rxjs';

console.log('epic added')

export const pingEpic = (action$) => {
  console.log(action$, 'action$')
 return action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });
}

export const pingEpicNew = (action$) => {
  console.log(action$, 'action$')
 return action$.ofType('PING_NEW')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG_NEW' });
}