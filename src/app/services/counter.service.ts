import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();


   // Method to increment counter
   increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  // Method to decrement counter
  decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}
