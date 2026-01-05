function isPasswordStrong(inputString) {
  inputString = inputString.trim();
  if (inputString.length < 8) {
    return false;
  }
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "012345789";
  const specialChar = "!@";

  let lowerCharExits = false;
  let upperCharExists = false;
  let numExits = false;
  let specialCharExits = false;
  for (let char of inputString) {
    if (lowerCase.includes(char)) {
      lowerCharExits = true;
    } else if (upperCase.includes(char)) {
      upperCharExists = true;
    } else if (num.includes(char)) {
      numExits = true;
    } else if (specialChar.includes(char)) {
      specialCharExits = true;
    }
  }
  if (lowerCharExits && upperCharExists && numExits && specialCharExits) {
    return true;
  }
  return false;
}
console.log("Piyush@124 ", isPasswordStrong("Piyush@124"));
console.log("piyush@124 ", isPasswordStrong("piyush@124"));
