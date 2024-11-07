import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
    // Subscribe to counter Observable
    this.counter$ = this.counterService.counter$;
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
