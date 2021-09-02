import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  console.error('oi');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    console.log('oi');
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
