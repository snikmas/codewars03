function loopingATriangle(){
  let text = '#';
  for (let i = 0; i < 6 ; i++){
    console.log(text);
    text += '#';
  }
}

function chessboard(n = 8){
  let text = '';
  for(let y = 0; y < n; y++){
    text += y != 0 && y % 2 ? ' ' : ''
    for (let x = 0; x < n / 2; x++){
      text += '* ';
    }
    text += '\n';

  }
  console.log(text)
}


function fizzBuzz() {
  for(let i = 1; i < 101; i++){
    if (!(i % 3)){
      console.log('Fizz')
    }
    else if((i % 3) && !(i % 5)){
      console.log('Buzz');
    }
    else {
      console.log(i)
    }
    
    if (!(i % 3) && !(i % 5)){
      console.log('FizzBuzz')
    }
}
}
fizzBuzz()