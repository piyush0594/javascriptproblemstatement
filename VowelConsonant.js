function vowelConsonant(str){
    str = str.toLowerCase();
    str = str.replace(/ /g,'')  //globally saare string spaces khtm krdega
    const vowel ='aeiou';
    const consonant = 'bcdfghjklmnpqrstvwxyz'
    let vowelCount =0;
    let consonantCount =0
    for(let i=0; i<= str.length -1; i++){
        //console.log(str[i])
        if(vowel.includes(str[i])){
            vowelCount++
        } else if(consonant.includes(str[i])){
            consonantCount++
        }
}
return {vowelCount, consonantCount}
}
console.log("Hello world",vowelConsonant('Hello world'))
 console.log("Mumbai -",vowelConsonant('Mumbai'))
// console.log("Vowel -",vowelConsonant('what'))