/**
 * Kata - https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 *
 * Find the next integral perfect square.
 * @param {number} sq - The integer.
 * @returns {number} - The next perfect square, otherwise return -1.
 */

function findNextSquare(sq) {
  const nextSquare = Math.pow(Math.sqrt(sq) + 1, 2);
  return nextSquare === Math.trunc(nextSquare) ? nextSquare : -1;
}
