// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  message = message.split('').map((lett) => {
    let num = lett.charCodeAt();
    if (lett.match(/[a-z]/)){
      return String.fromCharCode((num + 13 - 97) % 26 + 97)
    }
    else if (lett.match(/[A-Z]/)){ 
      console.log('ss')
      return String.fromCharCode((num + 13 - 65) % 26 + 65)
    }
    else {
      console.log(lett)
      return lett;
    }
  })

  return message.join('')
}

console.log(rot13('test'))
console.log(rot13('TEST'))

console.log('a'.match(/a-z/))