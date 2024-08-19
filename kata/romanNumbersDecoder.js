// https://www.codewars.com/kata/51b6249c4612257ac0000005

const numerics = {
  CM: 900,
  M: 1000,
  DCCC: 800,
  DCC: 700,
  DC: 600,
  CD: 400,
  D: 500,
  XC: 90,
  C: 100,
  LXXX: 80,
  LXX: 70,
  LX: 60,
  XL: 40,
  L: 50,
  IX: 9,
  X: 10,
  VIII: 8,
  VII: 7,
  VI: 6,
  IV: 4,
  V: 5,
  I: 1,
};

function solution(roman) {
  let counter = 0;
  let sum = 0;

  while (counter < roman.length) {
    for (const key in numerics) {
      const matchFound = roman.slice(counter).startsWith(key);
      if (matchFound) {
        counter += key.length;
        sum += numerics[key];
        break;
      }
    }
  }

  return sum;
}
