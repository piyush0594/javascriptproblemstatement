let matrix = [
  [5, 10],
  [2, 4],
  [1, 6],
];

let transpose = matrix[0].map((_, i) => matrix.map(row => row[i]));
console.log(matrix[0].length)
console.log(transpose)
