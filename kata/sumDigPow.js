/**
 * Kata - https://www.codewars.com/kata/5626b561280a42ecc50000d1
 *
 * Find numbers in a given range [a, b] where the number is equal to the sum of its digits each raised to the power of its position.
 * @param {number} a - The start of the range.
 * @param {number} b - The end of the range.
 * @returns {number[]} Returns an array of numbers that satisfy the condition.
 */
function sumDigPow(a, b) {
  const eureka = [];
  for (let number = a; number <= b; number++) {
    const sum = Array.from(String(number), Number).reduce(
      (total, num, index) => {
        const exponent = index + 1;
        return (total += Math.pow(num, exponent));
      },
      0
    );
    if (sum === number) eureka.push(sum);
  }

  return eureka;
}
