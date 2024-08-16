const suspects = {
  string: 'Zach',
  number: 'Monica',
  rest: 'the dog',
};

/**
 * Kata - https://www.codewars.com/kata/55a996e0e8520afab9000055
 *
 * States who ate the cookie.
 * @param {any} x Name of the suspect
 * @returns {string} x Returns a statement who ate the cookie
 */
export default function cookie(x) {
  const getSuspect = suspects[typeof x];
  const suspect = getSuspect ? getSuspect : suspects['rest'];
  return `Who ate the last cookie? It was ${suspect}!`;
}
