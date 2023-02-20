import { CounterAPI } from '@anedomansky/domain';
import { Component, Inject } from '@angular/core';
import { CounterAPIImpl } from './injections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-product-module-1';
  counter: number;

  constructor(@Inject(CounterAPIImpl) private counterAPI: CounterAPI) {
    this.counter = this.counterAPI.reset();
  }

  increment(): void {
    this.counter = this.counterAPI.increment(this.counter);
  }
}
