const prompt = require("prompt-sync")();

function rollDice(sideOfDice) {
  return Math.floor(Math.random() * sideOfDice) + 1;
}

function rollMultipleDice(numberOfDice, sideOfDice) {
  const result = [];
  let counter = 0;
  while (counter < numberOfDice) {
    const rollADiceResult = rollDice(sideOfDice);
    result.push(rollADiceResult);
    counter++;
  }
  return result;
}

const numberOfDice = prompt("Tell number of Dices: ");
const numberofSides = prompt("Number of sidesin dice: ");

console.log("numberOfDices", numberOfDice);
console.log("numberofSides", numberofSides);

console.log(rollMultipleDice(numberOfDice, numberofSides));
