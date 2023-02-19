export type CounterAdapterImpl = {
  increment(count: number): number;
  reset(): void;
};
