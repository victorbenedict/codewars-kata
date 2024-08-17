/**
 * Kata - https://www.codewars.com/kata/54da539698b8a2ad76000228
 *
 * Checks whether the direction would take exactly 10 mins and able to return to the staring point
 * @param {string[]} walk - The array of directions.
 * @returns {boolean} - If the walk takes exactly 10 mins and able to return to the staring point
 */
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;

  walk.forEach((direction) => {
    switch (direction) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
    }
  });

  return x === 0 && y === 0;
}
