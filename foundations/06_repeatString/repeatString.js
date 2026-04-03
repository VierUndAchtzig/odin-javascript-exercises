const repeatString = function(string, num) {
  if (num < 0) return `ERROR`
  let wort = ""
  for (let i = 0; i < num; i++) {
    wort += string
  }
  return wort
};

// Do not edit below this line
module.exports = repeatString;
