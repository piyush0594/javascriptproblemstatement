function transpose(inputArray) {
  const numberOfRows = inputArray.length;
  const numberOfColoumns = inputArray[0].length;
  console.log(numberOfColoumns, numberOfRows);

  const result = [];
  for (let i = 0; i < numberOfRows; i++) {
    //console.log(inputArray[i]);
    for(let j=0; j< numberOfColoumns; j++){
        //console.log(inputArray[i][j])
        if(!result[j]){
            result[j] = [];
            console.log(result[j])
        }
        result[j][i] = inputArray[i][j]
    }
  }
  return result
}
let matrix = [
  [4, 16, 32],
  [5, 25, 125],
];

console.log(transpose(matrix));
