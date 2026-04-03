const reverseString = function(string) {
  let wort = ""
  for (i = string.length - 1; i >= 0; i--) {
    // string.at(i) += wort
    wort += string.at(i)
  }
  return wort
};

// Do not edit below this line
module.exports = reverseString;
