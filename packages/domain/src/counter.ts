import { CounterAPI } from './ports/api/counter';
import { CounterAdapterImpl } from './ports/spi/counter-adapter';

export class Counter implements CounterAPI {
  private counterAdapter: CounterAdapterImpl;
  private count: number;

  constructor(counterAdapter: CounterAdapterImpl) {
    this.counterAdapter = counterAdapter;
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }

  increment(count: number): number {
    this.count = this.counterAdapter.increment(count);
    return this.count;
  }
  reset(): void {
    this.counterAdapter.reset();
  }
}
