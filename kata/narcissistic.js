/**
 * Kata - https://www.codewars.com/kata/5287e858c6b5a9678200083c
 * Identify if the integer is an Narcissistic Number.
 *
 * @param {number} value The number.
 * @returns {boolean} Returns whether the integer is Narcissistic Number or not.
 */
export default function narcissistic(value) {
  const arr = Array.from(String(value), Number);
  const exponent = arr.length;
  const armstrong = arr.reduce((sum, currentNumber) => {
    return sum + Math.pow(currentNumber, exponent);
  }, 0);

  return armstrong === value;
}
