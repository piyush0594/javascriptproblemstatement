function exponentNumber(base, exponent) {
    
    let result = base ** exponent;
  return result;
}
console.log(exponentNumber(2, 3));
console.log(exponentNumber(-5, 3));

// Second Solution

function calculatePower(base, exponent){
    let result =1
    for(let i=1; i<=exponent; i++){
        result = result *base
    }
    return result
}

console.log("2 to the power of 3",calculatePower(2,3))