// function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

function countLetters (string) {
  result = {};
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]] > 0) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  delete result[' '];
  return result;
}

console.log(countLetters('lighthouse in the house'));
