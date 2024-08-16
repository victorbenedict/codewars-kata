/**
 * Kata: https://www.codewars.com/kata/563e320cee5dddcf77000158
 *
 * Calculate the average of the array values.
 * @param {number[]} marks Array with some numbers.
 * @returns {number} The average value.
 */
export default function getAverage(marks) {
  return Math.floor(
    marks.reduce((total, number) => total + number, 0) / marks.length
  );
}
