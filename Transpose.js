let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let transpose = [];

// for coulumns  i = 0,1
for (let i = 0; i < matrix[0].length; i++) {
  // console.log(matrix[i])
  transpose[i] = [];

  // for rows j = 0,1,2
  for (let j = 0; j < matrix.length; j++) {
    console.log(matrix[i][j]);
    transpose[i][j] = matrix[j][i];
  }
}
console.log(transpose);
