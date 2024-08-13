/**
 * Kata - https://www.codewars.com/kata/514b92a657cdc65150000006
 * Calculate the total sum of all natural numbers below of a number.
 *
 * @param {number} number The number.
 * @returns {number} The total sum of all natural numbers.
 */
function solution(number) {
  if (number < 0) return 0;

  let result = 0;
  for (let digit = 0; digit < number; digit++) {
    if (digit % 3 === 0 || digit % 5 === 0) result += digit;
  }

  return result;
}
