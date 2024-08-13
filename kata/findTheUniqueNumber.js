/**
 * Kata: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
 *
 * Find the one unique number from an array of numbers.
 * @param {number[]} arr Array with some numbers.
 * @returns {number} The unique number.
 */
function findUniq(arr) {
  for (let i = 0; i < 3; i++) {
    const v = arr.pop();
    if (!arr.includes(v)) return v;
    else arr = arr.filter((num) => num !== v);
    if (arr.length === 1) return arr[0];
  }
}
