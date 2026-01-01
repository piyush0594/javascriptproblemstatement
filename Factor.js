function factorOfNumber(inputNumber){
    if(inputNumber < 1){
        throw new Error("Input number should be greater than zero")
    }
   const newArr= [];
    for(let i =1; i<=inputNumber; i++ ){
       // console.log(i)
        if(inputNumber % i ===0){
            
        newArr.push(i)
        
        }
    }
    return newArr
        
}

console.log(factorOfNumber(35))
console.log(factorOfNumber(49))
console.log(factorOfNumber(25))