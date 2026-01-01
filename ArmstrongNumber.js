function isArmstrong(inputNumber){
    let arr = [inputNumber].toString()
    let splitArr = arr.split('')
//     console.log(arr)
   console.log(splitArr)
    let result =0
   for(let i = 0; i< arr.length; i++){
    
       result =result +  arr[i] ** arr.length ;
    console.log(result)

   }
   if(result === inputNumber){
    console.log('is Armstrong')
   }else{
    console.log('not armstrong number')
   }
// }
// isArmstrong(370)


//Second Approach

function isArmstrong2(num){
    console.log(num)
    let number = num
    const digit = []
    while(number>0){
        let lastDigit = number%10;
        number = Math.floor(number/10)
        digit.push(lastDigit)
        //console.log(digit)
    }
    const length = digit.length
    let sum = 0
    digit.forEach((d) =>{
        //console.log(d, length, Math.pow(d, length))
        sum += Math.pow(d,length)
    })
    if(sum === num){
        return true
    }else{
        return false
    }
}

console.log('isArmstrong2(92727)',isArmstrong2(92727))