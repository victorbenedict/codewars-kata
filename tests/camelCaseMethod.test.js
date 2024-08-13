import '../kata/camelCaseMethod.js';

describe('String.prototype.camelCase', () => {
  it('should convert a string to camel case', () => {
    expect('test case'.camelCase()).toBe('TestCase');
    expect('camel Case method'.camelCase()).toBe('CamelCaseMethod');
    expect('say hello'.camelCase()).toBe('SayHello');
    expect('camel case word'.camelCase()).toBe('CamelCaseWord');
    expect(''.camelCase()).toBe('');
  });
});
