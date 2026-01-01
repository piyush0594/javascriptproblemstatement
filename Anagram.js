function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charInStr1 = {};
  const charInStr2 = {};

  for (let char of str1) {
    if (!charInStr1[char]) {
      charInStr1[char] = 0;
    }
    charInStr1[char] = charInStr1[char] + 1;
  }
  console.log(charInStr1);

  for (let char of str2) {
    if (!charInStr2[char]) {
      charInStr2[char] = 0;
    }
    charInStr2[char] = charInStr2[char] + 1;
  }
  //console.log(charInStr2);
  for (let key in charInStr1) {
    // console.log(key)
    if (charInStr1[key] !== charInStr2[key]) {
      return false;
    }
  }
  return true;
}

console.log("pools spool", isAnagram("pools", "spool"));
console.log("rahul  ashis", isAnagram("rahul", "ashis"));
