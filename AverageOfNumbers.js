function calculateAvg(inputArr) {
  let sumOfArr = 0;
  let totalNumber = 0;
  for (let i = 0; i <= inputArr.length - 1; i++) {
    // console.log(i)
    sumOfArr = sumOfArr + inputArr[i];
    totalNumber = inputArr.length;

    avgOfNumber = sumOfArr / totalNumber;
  }
  return avgOfNumber;
}

console.log("Average of given Array of Numbers", calculateAvg([2, 1, 15, 3]));
console.log("Average of given Array of Numbers", calculateAvg([2, 15, 42, 1]));
