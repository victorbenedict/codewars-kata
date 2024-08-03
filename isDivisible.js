/**
 * Kata - https://www.codewars.com/kata/5545f109004975ea66000086/
 *
 * Checks whether a number is divisible by two given integers
 * @param {number} n - The target number.
 * @param {number} x - The divisor x.
 * @param {number} y - The divisor y.
 * @returns {boolean} -
 */
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
