/**
 * Kata - https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 *
 * Identify the strings in array1 which are substring of array2 in lexicographical order.
 * @param {[]string} array1 - The first array.
 * @param {[]string} array2 - The second array.
 * @returns {[]string} - The array1 strings that are substring/s in array2 strings.
 */
function inArray(array1, array2) {
  const substrings = [];
  array1.forEach((word1) => {
    for (const word2 of array2) {
      if (word2.includes(word1)) {
        substrings.push(word1);
        return;
      }
    }
  });
  return substrings.sort();
}
