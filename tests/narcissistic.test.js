import narcissistic from '../kata/narcissistic';

describe('narcissistic', () => {
  test('should return true for Narcissistic numbers', () => {
    expect(narcissistic(7)).toBe(true);
    expect(narcissistic(153)).toBe(true);
  });
  test('should return false for Non-narcissistic numbers', () => {
    expect(narcissistic(122)).toBe(false);
    expect(narcissistic(487)).toBe(false);
  });
});
