function fizzBuzz(inputNumber) {
  //console.log(inputNumber);

  for (let i = 1; i <= inputNumber; i++) {
  
    if(i % 3 ===0 && i % 5 ===0){
        console.log('Fizz Buzz ')
    }
    else if(i % 3 ===0){
        console.log('Fizz')
    }
    else if(i % 5 ===0){
        console.log('Buzz')
    }else{
        console.log(i);
    }

    
  }
}

fizzBuzz(15);
// fizzBuzz(35);
// fizzBuzz(30);
