function isPrime(inputNumber){
    let result = true
    for(let i=2; i< inputNumber ; i++){
        console.log(inputNumber,'%',i,inputNumber % i)
        if(inputNumber % i ===0){
            result = false
        }
    }
    return result
}

console.log(isPrime(6))
 console.log(isPrime(5))
console.log(isPrime(10))
// console.log(isPrime(9))