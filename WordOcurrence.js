const bigString =
  "This is a big string with the word big repeated in the big string";
const findWord = "big";

function findAllOccurrence(big, word) {
  let result = [];
  let index = big.indexOf(word);
  while (index !== -1) {
    result.push(index);
    index = big.indexOf(word, index + 1);
  }
  return result;
}
console.log(findAllOccurrence(bigString, findWord));
