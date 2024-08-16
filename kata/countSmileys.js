/**
 * Represents a smiley face with specific parts.
 */
const smileyFace = {
  eyes: [';', ':'],
  nose: ['-', '~'],
  mouth: [')', 'D'],

  /**
   * Checks if a specific value is present in the specified part of the smiley face.
   * @param {string} part - The part of the smiley face ('eyes', 'nose', or 'mouth').
   * @param {string} value - The value to check for in the specified part.
   * @returns {boolean} True if the value is present in the specified part, otherwise false.
   */
  hasPart(part, value) {
    return this[part].includes(value);
  },

  /**
   * Determines if a given face string is a valid smiley face.
   * A valid smiley face can have the following structures:
   * - Eyes and mouth (2 characters): ":)", ":D"
   * - Eyes, nose, and mouth (3 characters): ":-)", ":~D"
   * @param {string} face - The face string to check.
   * @returns {boolean} True if the face is a valid smiley face, otherwise false.
   */
  isSmiley(face) {
    const hasEyes = this.hasPart('eyes', face.charAt(0));
    if (!hasEyes) return false;

    switch (face.length) {
      case 3: {
        const hasNose = this.hasPart('nose', face.charAt(1));
        const hasMouth = this.hasPart('mouth', face.charAt(2));
        return hasNose && hasMouth;
      }
      case 2: {
        const hasMouth = this.hasPart('mouth', face.charAt(1));
        return hasMouth;
      }
      default:
        return false;
    }
  },
};

/**
 * Kata - https://www.codewars.com/kata/583203e6eb35d7980400002a
 *
 * Counts the number if valid smileys in an array.
 * @param {string[]} arr An array of smileys.
 * @returns {number}  The total number of valid smileys.
 */
function countSmileys(arr) {
  return arr.reduce((count, face) => {
    return smileyFace.isSmiley(face) ? ++count : count;
  }, 0);
}
