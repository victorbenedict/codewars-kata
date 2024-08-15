/**
 * Kata - https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/
 *
 * Calculates the number of times you must multiply the digits of the number until you reach a single digit.
 * @param {number} num The number.
 * @returns {number} The multiplicative persistence.
 */
export default function persistence(number, count = 0) {
  if (number < 10) return count;
  const product = Array.from(String(number), Number).reduce(
    (product, currentNumber) => {
      return product * currentNumber;
    }
  );

  return persistence(product, count + 1);
}
