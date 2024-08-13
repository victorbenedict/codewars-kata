/**
 * Kata - https://www.codewars.com/kata/5bb904724c47249b10000131
 *
 * Calculates the total points of our team based on game match score results.
 * @param {string[]} games An array of strings representing game results in the format 'home score:away score'.
 * @returns {number} The total points accumulated by home team.
 */
function points(games) {
  return games.reduce((accumulatedPoint, game) => {
    const [homeScore, awayScore] = game.split(':').map(Number);
    if (homeScore > awayScore) {
      return (accumulatedPoint += 3);
    } else if (homeScore === awayScore) {
      return (accumulatedPoint += 1);
    }

    return accumulatedPoint;
  }, 0);
}
