function isPalindrome(str) {
  //let revStr = "";
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isSubStringPalindrome(str) {
  //console.log(str)
  let result = [];
  str = str.replaceAll(" ", "");
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.substring(i, j);
      //console.log(sub);
      if (sub.length > 1 && isPalindrome(sub)) {
        result.push(sub);
      }
    }
  }
  return result;
}

console.log(isSubStringPalindrome("madam racecar"));
console.log(isSubStringPalindrome("radar"));
