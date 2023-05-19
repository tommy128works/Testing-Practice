function capitalize(word) {
  let lowerCase = word.toLowerCase();
  let firstLetter = lowerCase.slice(0, 1).toUpperCase();
  let remaining = lowerCase.slice(1);
  return firstLetter + remaining;
}

export default capitalize;
