function celciusToFahrenheit(c){
    let result = (c*9/5) +32
    result = Math.round(result)
    return result
}

console.log(celciusToFahrenheit(11))