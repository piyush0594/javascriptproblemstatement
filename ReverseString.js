function reverseString(inputString){
    let result=''
    for(i = inputString.length-1; i>=0; i--){
        result = result + inputString[i]
    }
    return result;
}

//console.log(reverseString("Abilash"))
//console.log(reverseString("Cash"))



function reverseString2(str){
   const spliString =  str.split('')
   const revStr = spliString.reverse()
   const finalStr = revStr.join('')
   console.log(finalStr)
}

console.log(reverseString2("Ram"))