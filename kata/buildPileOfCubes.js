/**
 * Kata - https://www.codewars.com/kata/5592e3bd57b64d00f3000047/
 *
 * Get the total number of cubes needed to fill m volume building.
 * The cube at the bottom will have a volume of n to the power of 3,
 * the cube above will have volume of (n-1) to the power of 3,
 * and so on until the top which will have a volume of 1 to the power of 3.
 * @param {[]number} m The total volume of the building.
 * @returns {number}  Total number of cubes needed for the building.
 */
function findNb(m) {
  let sum = 0;
  let n = 0;
  while (sum < m) {
    ++n;
    sum += Math.pow(n, 3);
  }

  return sum === m ? n : -1;
}
