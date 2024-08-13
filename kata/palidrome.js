function isPalindrome(x) {
  const str = Array.from(x.toLowerCase());
  if (x.length % 2 === 1) {
    const middleChar = Math.ceil(x.length / 2) - 1;
    str.splice(middleChar, 1);
  }

  return (
    str.filter((char, index) => {
      return char != str[str.length - index - 1];
    }).length === 0
  );
}
