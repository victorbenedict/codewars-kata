const { reverse } = require('lodash');

/**
 * Kata - https://www.codewars.com/kata/51b62bf6a9c58071c600001b/
 *
 * Converts number to roman numerals.
 * @param {number} number The numer.
 * @returns {number} Returns the converted to roman numerals.
 */
function solution(number) {
  if (number < 1 || number > 3999) return;
  const once = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

  return Array.from(String(number), Number)
    .reverse()
    .reduce((roman, number, index) => {
      switch (index) {
        case 3:
          return (roman += 'M'.repeat(number));
        case 2:
          return (roman += hundreds[number]) + ',';
        case 1:
          return (roman += tens[number]) + ',';
        case 0:
          return (roman += once[number]) + ',';
      }
    }, '')
    .split(',')
    .reverse()
    .join('')
    .trim();
}
