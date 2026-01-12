const maxNumber = 5;

let i = 0;
while (i < 20) {
  //console.log(Math.floor(Math.random() * maxNumber) + 1);

  i++;
}

const minNumber = 11; // included
const maximumNumber = 21; //not included
console.log("Between", minNumber, maximumNumber);
let j = 0;
while (j < 20) {
  console.log(
    Math.floor(Math.random() * (maximumNumber - minNumber) + minNumber)
  );
  j++;
}
