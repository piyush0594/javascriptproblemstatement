const paranthesis = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function isParanthesis(inputString) {
  let paranthesisArray = [];
  for (let char of inputString) {
    if (paranthesis[char]) {
      paranthesisArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningPranthesis = paranthesisArray.pop();
      if (paranthesis[lastOpeningPranthesis] !== char) {
        return false;
      }
    }
  }

  return paranthesisArray.length === 0;
}

console.log("{[()]}", isParanthesis("{[()]}"));
console.log("{[()}", isParanthesis("{[()}"));
