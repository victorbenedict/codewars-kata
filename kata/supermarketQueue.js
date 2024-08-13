/**
 * Kata - https://www.codewars.com/kata/57b06f90e298a7b53d000a86
 * Calculates the total time required for all the customers to check out in a supermaker queue.
 *
 * @param {number[]} customers - Queue in array representing each customer's time required to checkout.
 * @param {number} n - Number of checkout lanes.
 * @returns {number} - Total time required.
 */

function queueTime(customers, n) {
  const lanes = new Array(n).fill(0);

  customers.forEach((time) => {
    const minLaneIndex = lanes.indexOf(Math.min(...lanes));
    lanes[minLaneIndex] += time;
  });
  return Math.max(...lanes);
}
