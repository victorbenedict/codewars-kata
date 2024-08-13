const _ = require('lodash');

/**
 * Kata - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 *
 * Transforms a string such that each character is repeated
 * based on its position in the string, with the first letter capitalized
 * and subsequent letters in lowercase, separated by hyphens.
 * @param {string} s - The input string.
 * @returns {number} - The mumbled string.
 */
function accum(s) {
  return Array.from(s)
    .map((char, index) => {
      return _.capitalize(new Array(index + 1).fill(char).join(''));
    })
    .join('-');
}
