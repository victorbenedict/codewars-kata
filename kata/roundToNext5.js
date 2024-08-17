/**
 * Kata - https://www.codewars.com/kata/55d1d6d5955ec6365400006d
 *
 * Rounds an interger to the nearest multiple of 5.
 * @param {number} n The integer.
 * @returns {number} The rounded integer.
 */
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
