function countingWords(inputString){
    
    console.log('Before trim',inputString)
    inputString = inputString.trim()
    console.log('After trim',inputString)
    splitStr= inputString.split(' ')
    //console.log(splitStr)
    const nonSpaceElement = splitStr.filter((element) => element != '')
    //console.log("nonSpaceElement",nonSpaceElement)
    return nonSpaceElement.length;
}


console.log("Hello World",countingWords(' Hello   World '))
console.log("What is the date today",countingWords('What is  the date today'))