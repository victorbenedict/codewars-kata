import cookie from '../kata/cookie';

describe('cookie', () => {
  test('should return a statement telling who ate the cookie.', () => {
    expect(cookie('Ryan')).toBe('Who ate the last cookie? It was Zach!');
    expect(cookie(26)).toBe('Who ate the last cookie? It was Monica!');
    expect(cookie(2.3)).toBe('Who ate the last cookie? It was Monica!');
    expect(cookie(true)).toBe('Who ate the last cookie? It was the dog!');
  });
});
