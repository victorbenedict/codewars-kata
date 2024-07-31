/* 
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  for (let i = 0; i < 3; i++) {
    const v = arr.pop();
    if (!arr.includes(v)) return v;
    else arr = arr.filter((num) => num !== v);
    if (arr.length === 1) return arr[0];
  }
}
