// console.log('a'.charCodeAt(0))
// console.log('b'.charCodeAt(0))

function isAlphabeticOrder(str) {
    str = str.replace(/ /g,'')
  for (let i = 0; i < str.length - 1; i++) {
    // console.log(str[i])
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log("acgh", isAlphabeticOrder("ac g h"));
console.log("acgch", isAlphabeticOrder("acgch"));
