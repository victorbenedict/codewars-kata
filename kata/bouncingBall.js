/**
 * Kata - https://www.codewars.com/kata/5544c7a5cb454edb3c000047
 *
 * Calculate how many times the ball passes the window.
 * @param {number} h - The initial height from which the ball is dropped.
 * @param {number} bounce - The bounce factor (fraction of the height).
 * @param {number} window - The height of the window.
 * @returns {number} The total number of times the observer sees the ball pass the window.
 */
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let bounceMaxHeight = h;
  let passCount = 0;
  while (bounceMaxHeight > window) {
    ++passCount;
    bounceMaxHeight = bounceMaxHeight * bounce;
    if (bounceMaxHeight > window) passCount++;
  }

  return passCount;
}
