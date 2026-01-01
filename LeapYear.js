function leapYear(inputYear) {
  if (inputYear % 4 === 0) {
    //console.log("It is a leap Year");
    return true;
  } else {
    //console.log("Not a leap year");
    return false;
  }
  return inputYear;
}
console.log(leapYear(2003));
console.log(leapYear(2032));
console.log(leapYear(2026));
console.log(leapYear(2028));
