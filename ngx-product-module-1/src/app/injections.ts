import { CounterAPI } from '@anedomansky/domain';
import { InjectionToken } from '@angular/core';

export const CounterAPIImpl = new InjectionToken<CounterAPI>('COUNTER_API');
