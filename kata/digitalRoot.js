/**
 * Kata - https://www.codewars.com/kata/541c8630095125aba6000c00
 *
 * Calculates the recursive sum of all the digits in a number.
 * @param {number} n The number.
 * @returns {number} The recursive sum of all the digits of the given number.
 */
export default function digitalRoot(n) {
  if (n < 10) return n;

  return digitalRoot(
    Array.from(String(n), Number).reduce(
      (totalSum, digit) => totalSum + digit,
      0
    )
  );
}
