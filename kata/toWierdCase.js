//https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return Array.from(word)
        .map((char, index) => {
          return index % 2 === 1 ? char : char.toUpperCase();
        })
        .join('');
    })
    .join(' ');
}
