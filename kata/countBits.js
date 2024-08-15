/**
 * Kata - https://www.codewars.com/kata/526571aae218b8ee490006f4
 *
 * Count the number of 1's after converting the given integer.
 * @param {number} n The integer
 * @returns {number}  The total number of 1's
 */
export default function countBits(n) {
  return Array.from(n.toString(2), Number).reduce((count, number) =>
    number === 1 ? count + 1 : count
  );
}
