import { expect, test } from 'vitest';

import { add } from './calc';

test('10 + 20 should be 30.', () => {
  expect(add(10, 20)).toBe(30);
});
