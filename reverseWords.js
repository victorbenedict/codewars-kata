/**
 * Kata - https://www.codewars.com/kata/51c8991dee245d7ddf00000e
 *
 * Reverses all the words in a sentence
 * @param {string} s - The input sentence.
 * @returns {string} - The reversed sentence.
 */
function reverseWords(str) {
  const reverseStr = [];
  str.split(' ').map((word, index, arr) => {
    const reverseIndex = arr.length - index - 1;
    reverseStr[reverseIndex] = word;
  });

  return reverseStr.join(' ');
}

console.log(reverseWords('a b c d'));
