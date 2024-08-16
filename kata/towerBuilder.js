/**
 * Kata - https://www.codewars.com/kata/576757b1df89ecf5bd00073b
 *
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
 * @param {number} nFloors The number of floors.
 * @returns {string[]} The pyramid-shaped tower in array of strings.
 */
function towerBuilder(nFloors) {
  const building = [];
  for (let floor = 0; floor < nFloors; floor++) {
    const spaces = ' '.repeat(nFloors - floor - 1);
    const block = '*'.repeat(floor * 2 + 1);
    building.push(spaces + block + spaces);
  }

  return building;
}
