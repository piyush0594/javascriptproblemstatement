function largestNumInArray(arr) {
  if (!arr || arr.length === 0) {
    throw new Error("We need some numebers in array");
  }

  let biggestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr)
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

console.log("[1,5,12,22,3,10]", largestNumInArray([1, 5, 12, 22, 3, 10]));

// Second solution for this Problem

function biggestNumbr(arr) {
  const maxValue = Math.max(...arr);
  console.log(maxValue);
}
biggestNumbr([22, 49, 51, 74]);
