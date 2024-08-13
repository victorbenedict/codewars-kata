/**
 * Kata - https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 *
 * Splits the string into pairs of two characters
 * @param {string} str - The input string.
 * @returns {[]string} - Returns an array with pairs of strings. If the pair contains odd number the second character is replaced with underscore.
 */
function solution(str) {
  if (str.length === 0) return [];
  if (str.length % 2 === 1) str += '_';
  return (str + '_').match(/.{1,2}/g) || [];
}
