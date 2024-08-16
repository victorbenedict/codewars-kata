Array.prototype.sum = function (start, end) {
  return this.slice(start, end).reduce((a, b) => a + b, 0);
};

/**
 * Kata - https://www.codewars.com/kata/5679aa472b8f57fb8c000047
 *
 * Identify the array index where the sum of elements on the left is equal to the sum of elements on the right.
 * @param {number[]} arr. The array.
 * @returns {number} The array index where the sum of elements on the left is equal to the sum of elements on the right. Return -1 if no such index is found.
 */
function findEvenIndex(arr) {
  for (let index = 0; index < arr.length; index++) {
    const leftArrSum = arr.sum(0, index);
    const rightArrSum = arr.sum(index + 1, arr.length);
    if (leftArrSum === rightArrSum) return index;
  }

  return -1;
}
