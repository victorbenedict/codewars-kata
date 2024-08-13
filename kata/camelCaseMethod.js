/**
 * Kata - https://www.codewars.com/kata/587731fda577b3d1b0001196
 *
 * Adds a method to the String class that converts a string into a camelCase format.
 * @returns {string} The camel-cased version of the string.
 */
String.prototype.camelCase = function () {
  return this.split(' ').reduce((prev, current) => {
    const camel =
      current.charAt(0).toUpperCase() + current.substring(1).toLowerCase();
    return prev + camel;
  }, '');
};
