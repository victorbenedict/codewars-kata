import digitalRoot from '../kata/digitalRoot';

describe('digitalRoot', () => {
  test('should calculate the recursive sum of a number', () => {
    expect(digitalRoot(16)).toBe(7);
    expect(digitalRoot(456)).toBe(6);
  });
});
