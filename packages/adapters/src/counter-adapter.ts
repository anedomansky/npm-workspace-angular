import { CounterAdapterImpl } from '@anedomansky/domain';

export class CounterAdapter implements CounterAdapterImpl {
  increment(count: number): number {
    const newCount = count + 1;
    return newCount;
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
}
