function sumOfDigits(inputNumber) {
  const str = inputNumber.toString();
  //console.log(str)
  const splitStr = str.split("");
  console.log(splitStr);
  let total = 0;
  splitStr.forEach((num) => {
    total = total + parseInt(num);
  });
  return total;
}
console.log(sumOfDigits(12));
console.log(sumOfDigits(127));

//Second solution for this problem

function sumOfDigits2(inputNumber) {
  let number = inputNumber;
  let totalSum = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    //number = 456
    //number = 45
    //number = 4
    totalSum = totalSum + lastDigit;
  }
  return totalSum;
}
console.log("sumOfDigits2(12)", sumOfDigits2(12));
console.log("sumOfDigits2(25)", sumOfDigits2(25));
