function reverseString(word) {
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

export default reverseString;
