import { filter } from 'lodash';

export const differenceSet = (first: Set<string | number>, second: Set<string | number>) =>
  new Set(filter([...first], (x) => !second.has(x)));
