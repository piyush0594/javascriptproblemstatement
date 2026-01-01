function characterOccurrence(inputString) {
  console.log(inputString)
  inputString = inputString.toLowerCase()
  let result= {}
  console.log('result before', result)
  for(let i = 0; i<inputString.length; i++){
    if( !result[inputString[i]]){
        result[inputString[i]] = 0
    }
        result[inputString[i]] = result[inputString[i]] +1
  }
  console.log('after result', result)
}
characterOccurrence("Ashish Saluja");

// Second approach

function countCharacter(str){
    str = str.toLowerCase()
    
    let splittedStr = str.split('')
   // console.log(splittedStr)
    let result = splittedStr.reduce((acc, char) =>{
        //console.log(char)
        if(!acc[char]){
            acc[char] = 0
        }
        acc[char] = acc[char] +1
        return acc
    }, {})
    console.log('Accumulated result is', result)
}
countCharacter("Hello world")