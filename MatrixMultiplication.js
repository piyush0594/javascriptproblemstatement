function matrixMultiplication(array1, array2) {

    const rowsInResult = array1.length
    const coulumnsInResult = array2[0].length

    const rowsInSecondArray = array2.length
   const result = [];

   for(let i = 0; i < rowsInResult; i++){
    for(let j = 0; j< coulumnsInResult; j++){
        let cellValue = 0
        for(let n = 0; n< rowsInSecondArray; n++){
            cellValue += array1[i][n] * array2[n][j]
        }
        if(!result[i]){
            result[i] = []
        }
        result[i][j] = cellValue
    }
   }
   return result
}
const firstArray = [
  [1, 2],
  [3, 4],
];
const secondArray = [
  [5, 6],
  [7, 8],
];
console.log(matrixMultiplication(firstArray, secondArray))