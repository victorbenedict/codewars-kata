/**
 * Kata - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 *
 * Convert the string into an array of mexican wave of strings.
 * @param {string} str - The string.
 * @returns {string[]} - The array of strings in mexican wave.
 */
function wave(str) {
  return new Array(str.length).fill(str).reduce((wave, word, wordIndex) => {
    if (word[wordIndex] !== ' ') {
      const newWord = word.split('').reduce((word, char, charIndex) => {
        const newChar = wordIndex === charIndex ? char.toUpperCase() : char;
        return word + newChar;
      }, '');

      wave.push(newWord);
    }

    return wave;
  }, []);
}
