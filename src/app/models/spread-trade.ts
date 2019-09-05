import { WeeksHistory } from './index';

export class SpreadTrade{
  id: number;
  longs?: string;
  shorts?: string;
  long_entry?: number;
  short_entry?: number;
  spread?: number;
  long?: number;
  short?: number;
  current_spread?: number;
  percentage?: number;
  history?: WeeksHistory[];
}