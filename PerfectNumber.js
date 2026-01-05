function isPerfectNumber(inputNumber) {
  let perfectNumber = 0;
  for (let i = 0; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      perfectNumber = perfectNumber + i;
    }
  }
  if (perfectNumber === inputNumber && perfectNumber !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPerfectNumber(28));
console.log(isPerfectNumber(7));

// Second approach

function isPerfectNumberChecker(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  let sum = 0;
  arr.forEach((d) => {
    sum = sum + d;
  });
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log("6 is PerfectNumberChecker", isPerfectNumberChecker(6));
console.log("9 is PerfectNumberChecker", isPerfectNumberChecker(9));
