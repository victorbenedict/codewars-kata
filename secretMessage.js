/**
 * Kata - https://www.codewars.com/kata/55225023e1be1ec8bc000390
 * Greets a user name standard hello but greets user Johnny differently.
 *
 * @param {string} name - User name.
 * @returns {string} - Greetings.
 */

function greet(name) {
  if (name !== 'Johnny') return 'Hello, ' + name + '!';
  return 'Hello, my love!';
}
