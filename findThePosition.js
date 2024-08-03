/**
 * Kata - https://www.codewars.com/kata/5808e2006b65bff35500008f/
 *
 * Find the alphabet position of a letter.
 * @param {string} letter
 * @returns {string} - The statement of what is the position of the letter.
 */

function position(letter) {
  return `Position of alphabet: ${letter.toUpperCase().charCodeAt() - 64}`;
}
