function isPalindrome(str) {
  //let revStr = "";
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("Piyush"));
console.log("madam", isPalindrome("madam"));
console.log("level",isPalindrome("level"));
