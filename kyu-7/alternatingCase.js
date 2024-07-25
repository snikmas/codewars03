// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAl

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return (this.split().map((letter) => {
    return letter = letter.toUpperCase() == letter ? letter.toLowerCase() : letter.toUpperCase();
  })).join('')

}


console.log("hello world".toAlternatingCase())
console.log("HELLO WORLD".toAlternatingCase())
console.log("hello WORLD".toAlternatingCase())
console.log("HeLLo WoRLD".toAlternatingCase())
console.log("12345".toAlternatingCase())
console.log("1a2b3c4d5e".toAlternatingCase())