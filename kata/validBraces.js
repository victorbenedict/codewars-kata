/**
 * Kata - https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 *
 * Determines if the order of the braces is valid.
 * @param {string} braces The string of braces.
 * @returns {boolean} The returns a boolean whether the order of the braces is valid or not.
 */
function validBraces(braces) {
  const bracesObject = { '(': ')', '[': ']', '{': '}' };
  const isEndOpener = braces[braces.length - 1] in bracesObject;
  if (isEndOpener) return false;

  const openers = [];

  for (const brace of braces) {
    const isCloser = Object.values(bracesObject).includes(brace);
    if (isCloser) {
      const openerPair = bracesObject[openers.pop()];
      const closer = brace;
      if (openerPair !== closer) return false;
    } else {
      openers.push(brace);
    }
  }

  return true;
}
