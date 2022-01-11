// @ts-nocheck
import {Observable, Observer, Subscription} from 'rxjs';
import { filter, share } from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventMessengerService {
    observable: Observable<any>;
    observer: Observer<any>;
    
    constructor() {
        this.observable = Observable.create((observer:Observer<any>) => {
            this.observer = observer
        }).pipe(share());   
    }

    public subscribe(eventName: any, callback: any) {
        const subscriber:Subscription = this.observable.pipe(
                filter(event => {
                    return event.name === eventName;
                })
            ).subscribe(callback);

        return subscriber;
    }

    public broadcast(event: any) {
        if(this.observer != null) {
            this.observer.next(event);
        }
    }

    public destroy(subscriber: Subscription) {
        subscriber.unsubscribe();
    }
}
