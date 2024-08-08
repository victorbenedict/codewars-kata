/**
 * Kata - https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 *
 * Get the sum of two arrays
 * @param {[]number} arr1 - The first array.
 * @param {[]number} arr2 - The second array.
 * @returns {number} - The sum of the two array values.
 */
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b);
}

function arara(...arr) {
  const [a, b, c, d] = arr;
  return d;
}
console.log(arara([1, 2, 3], [4, 5, 6], [7, 8, 9], 'Victor'));
