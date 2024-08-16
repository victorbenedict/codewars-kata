/**
 * Kata - https://www.codewars.com/kata/556deca17c58da83c00002db
 *
 * Calculates the tribonacci number.
 * @param {number[]} signature The initial 3 values.
 * @param {number} n The total length of the sequence.
 * @returns {number[]} Returns the tribonacci sequence with given length.
 */
export default function tribonacci(signature, n) {
  if (n < 4) return signature.slice(0, n);

  while (signature.length < n) {
    const last3rdIndex = signature.length - 3;
    const sum = signature.slice(last3rdIndex).reduce((a, b) => a + b);
    signature.push(sum);
  }

  return signature;
}
