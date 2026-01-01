function factorialOfNumber(num) {
  if (num < 0) {
    throw new Error("Number should be greater than zero");
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
    console.log(result);
  }
  return result;
}
// console.log(factorialOfNumber(-9));
// console.log(factorialOfNumber(6));
// console.log("7!", factorialOfNumber(7));

function factorialUsingRecursion(inputNumber) {
  if (inputNumber < 0) {
    throw new Error("Number should be greater than zero");
  }
  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  }
  return inputNumber * factorialUsingRecursion(inputNumber - 1);
  //return 5 * factorialUsingRecursion(4)
  //return 5 * factorialUsingRecursion(3)
  //return 3 * factorialUsingRecursion(2)
  //return 3 * factorialUsingRecursion(1)
}
console.log(factorialUsingRecursion(5));
console.log(factorialUsingRecursion(6));
console.log("7!", factorialUsingRecursion(7));
