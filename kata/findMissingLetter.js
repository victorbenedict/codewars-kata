/**
 * Kata - https://www.codewars.com/kata/5839edaa6754d6fec10000a2/
 *
 * Find the missing letter given the consective array of alphabets.
 * @param {string[]} arr. The array of alphabets.
 * @returns {string} The missing letter.
 */
function findMissingLetter(array) {
  for (let index = 1; index < array.length; index++) {
    const previousCharCode = array[index - 1].charCodeAt();
    const currentCharCode = array[index].charCodeAt();
    if (previousCharCode + 1 !== currentCharCode)
      return String.fromCharCode(currentCharCode - 1);
  }
}
