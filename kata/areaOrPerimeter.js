/**
 * Kata - https://www.codewars.com/kata/5ab6538b379d20ad880000ab/
 *
 * Calculates the area or perimiter of a rectangle.
 * @param {number} l The length.
 * @param {number} w The width.
 * @returns {number} Returns the area of the shape is square, otherwire it returns the perimeter.
 */
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : l * 2 + w * 2;
};
